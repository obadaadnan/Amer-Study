/* =========================================================================
   امتحانات الأستاذ عامر الجرابعة — Frontend logic (GitHub Pages)
   -------------------------------------------------------------------------
   IMPORTANT — set this to your Apps Script Web App URL after deploying
   Code.gs (Deploy > New deployment > Web app > copy the URL it gives you).
   It looks like:
   https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXX/exec
   ========================================================================= */
const API_URL = 'https://script.google.com/macros/s/AKfycbw3AbxFh1LKYPfVNGUnUSG749K00X0DQFWwCFj1wiidbKFBr4XLl-BP7QLH4aiJWfNE/exec';

/* =====================================================================
   EXAMS DATA CONFIG
   -------------------------------------------------------------------
   This is the ONLY place you need to touch to add/remove/update exams.
   Add objects to any unit's array, e.g.:

     { title: 'الامتحان الأول', url: 'https://drive.google.com/...' }

   If a unit's array is empty, students will see "لا توجد امتحانات
   مضافة بعد" automatically — nothing else needs to change.
   ===================================================================== */
const EXAMS_DATA = {
  '2010-s1': {
    'الوحدة الأولى': [],
    'الوحدة الثانية': [],
    'الوحدة الثالثة': []
  },
  '2010-s2': {
    'الوحدة الأولى': [],
    'الوحدة الثانية': [],
    'الوحدة الثالثة': []
  },
  '2009-business-math': {
    'الوحدة الأولى': [],
    'الوحدة الثانية': [],
    'الوحدة الثالثة': []
  },
  '2009-business-finlit': {
    'الوحدة الأولى': [],
    'الوحدة الثانية': [],
    'الوحدة الثالثة': []
  },
  '2009-languages-finlit': {
    'الوحدة الأولى': [],
    'الوحدة الثانية': [],
    'الوحدة الثالثة': []
  }
};

// Electronic bag — same folder for both generations (change here if needed later)
const BAG_URL = 'https://drive.google.com/drive/folders/1e6z6VX7lm_IlcA6lUuLrm2lV1v4u4sr8';

const VALID_PHONE_PREFIXES = ['079', '078', '077'];

// Holds the row number returned by the API after saving the student,
// so the 2009 field choice can UPDATE that row instead of creating a new one.
let currentStudentRow = null;
let currentGeneration = null;

/* ============ NAVIGATION ============ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function (el) {
    el.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', function (e) {
  const backBtn = e.target.closest('.back-btn');
  if (backBtn) {
    showScreen(backBtn.getAttribute('data-back'));
  }
});

/* ============ REUSABLE: CHOICE CARD (semester / field) ============ */
function renderChoiceCard(container, label, iconText, onClick) {
  const card = document.createElement('div');
  card.className = 'choice-card';
  card.innerHTML =
    '<div class="choice-icon">' + iconText + '</div>' +
    '<div class="choice-label">' + label + '</div>';
  card.addEventListener('click', onClick);
  container.appendChild(card);
}

/* ============ REUSABLE: UNIT CARD ============ */
function renderUnits(containerId, dataKey) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const units = EXAMS_DATA[dataKey];

  Object.keys(units).forEach(function (unitName, index) {
    const exams = units[unitName];

    const card = document.createElement('div');
    card.className = 'unit-card';

    const header = document.createElement('div');
    header.className = 'unit-header';
    header.innerHTML =
      '<div class="unit-number">' + (index + 1) + '</div>' +
      '<h3 class="unit-title">' + unitName + '</h3>';
    card.appendChild(header);

    const list = document.createElement('div');
    list.className = 'exam-list';

    if (!exams || exams.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'exam-empty';
      empty.textContent = 'لا توجد امتحانات مضافة بعد — سيتم إضافتها قريبًا';
      list.appendChild(empty);
    } else {
      exams.forEach(function (exam) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'exam-item';
        btn.innerHTML = '<span>' + exam.title + '</span><span class="exam-arrow">‹</span>';
        btn.addEventListener('click', function () {
          openExam(exam);
        });
        list.appendChild(btn);
      });
    }

    card.appendChild(list);
    container.appendChild(card);
  });
}

function openExam(exam) {
  document.getElementById('exam-modal-title').textContent = exam.title;
  const link = document.getElementById('exam-modal-link');
  const body = document.getElementById('exam-modal-body');
  if (exam.url) {
    body.textContent = 'اضغط على الزر أدناه لفتح الامتحان.';
    link.href = exam.url;
    link.hidden = false;
  } else {
    body.textContent = 'سيتم إضافة رابط هذا الامتحان قريبًا.';
    link.hidden = true;
  }
  document.getElementById('exam-modal-overlay').hidden = false;
}

document.getElementById('exam-modal-close').addEventListener('click', function () {
  document.getElementById('exam-modal-overlay').hidden = true;
});
document.getElementById('exam-modal-overlay').addEventListener('click', function (e) {
  if (e.target.id === 'exam-modal-overlay') e.target.hidden = true;
});

/* ============ REUSABLE: ELECTRONIC BAG ============ */
function renderBag(slotId) {
  const slot = document.getElementById(slotId);
  if (!slot) return;
  const a = document.createElement('a');
  a.className = 'bag-card';
  a.href = BAG_URL;
  a.target = '_blank';
  a.rel = 'noopener';
  a.innerHTML =
    '<div class="bag-icon">🎒</div>' +
    '<div class="bag-text">' +
      '<p class="bag-title">الحقيبة الإلكترونية</p>' +
      '<p class="bag-subtitle">كل ما تحتاجه في مكان واحد</p>' +
    '</div>';
  slot.appendChild(a);
}

/* ============ BUILD STATIC SECTIONS ON LOAD ============ */
function buildSections() {
  // 2010 — semester choice
  const grid2010 = document.getElementById('grid-2010-semesters');
  renderChoiceCard(grid2010, 'الفصل الدراسي الأول', '١', function () {
    showScreen('screen-2010-s1');
  });
  renderChoiceCard(grid2010, 'الفصل الدراسي الثاني', '٢', function () {
    showScreen('screen-2010-s2');
  });
  renderBag('bag-2010-slot');
  renderUnits('units-2010-s1', '2010-s1');
  renderUnits('units-2010-s2', '2010-s2');

  // 2009 — field choice
  const grid2009 = document.getElementById('grid-2009-fields');
  renderChoiceCard(grid2009, 'حقل الأعمال', 'أ', function () {
    handleFieldSelected('حقل الأعمال', 'screen-2009-business');
  });
  renderChoiceCard(grid2009, 'حقل اللغات والعلوم الإنسانية', 'ل', function () {
    handleFieldSelected('حقل اللغات والعلوم الإنسانية', 'screen-2009-languages');
  });

  renderUnits('units-2009-business-math', '2009-business-math');
  renderUnits('units-2009-business-finlit', '2009-business-finlit');
  renderUnits('units-2009-languages-finlit', '2009-languages-finlit');
  renderBag('bag-2009-business-slot');
  renderBag('bag-2009-languages-slot');
}

/* ============ PHONE VALIDATION (client-side mirror of server rules) ============ */
function isValidPhone(phone) {
  if (!/^\d{10}$/.test(phone)) return false;
  const prefix = phone.substring(0, 3);
  return VALID_PHONE_PREFIXES.indexOf(prefix) !== -1;
}

function setFieldError(fieldId, message) {
  const errorEl = document.getElementById('error-' + fieldId);
  const inputEl = document.getElementById('input-' + fieldId);
  if (errorEl) errorEl.textContent = message || '';
  if (inputEl) inputEl.classList.toggle('invalid', !!message);
}

/* ============ API CALL HELPER ============ */
function callApi(action, params) {
  const query = new URLSearchParams(Object.assign({ action: action }, params));
  return fetch(API_URL + '?' + query.toString())
    .then(function (res) { return res.json(); });
}

/* ============ STUDENT FORM SUBMIT ============ */
document.getElementById('student-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('input-name').value.trim();
  const phone = document.getElementById('input-phone').value.trim();
  const generation = document.getElementById('input-generation').value;

  let valid = true;
  setFieldError('name', '');
  setFieldError('phone', '');
  setFieldError('generation', '');
  document.getElementById('error-form').textContent = '';

  if (name.length < 2) {
    setFieldError('name', 'الرجاء إدخال اسمك الكامل.');
    valid = false;
  }
  if (!isValidPhone(phone)) {
    setFieldError('phone', 'رقم الهاتف يجب أن يتكون من 10 أرقام ويبدأ بـ 079 أو 078 أو 077.');
    valid = false;
  }
  if (!generation) {
    setFieldError('generation', 'الرجاء اختيار الجيل.');
    valid = false;
  }
  if (!valid) return;

  setSubmitLoading(true);

  callApi('saveStudent', { name: name, phone: phone, generation: generation })
    .then(function (result) {
      setSubmitLoading(false);
      if (!result || !result.success) {
        document.getElementById('error-form').textContent =
          (result && result.error) || 'حدث خطأ غير متوقع. حاول مرة أخرى.';
        return;
      }
      currentStudentRow = result.row;
      currentGeneration = generation;

      if (generation === 'جيل 2010') {
        showScreen('screen-2010');
      } else {
        showScreen('screen-2009');
      }
    })
    .catch(function () {
      setSubmitLoading(false);
      document.getElementById('error-form').textContent =
        'تعذر الاتصال بالخادم. تحقق من اتصالك بالإنترنت وحاول مرة أخرى.';
    });
});

function setSubmitLoading(loading) {
  const btn = document.getElementById('btn-continue');
  btn.disabled = loading;
  btn.querySelector('.btn-label').textContent = loading ? 'جارٍ الحفظ...' : 'متابعة';
  btn.querySelector('.btn-spinner').hidden = !loading;
}

/* ============ 2009 FIELD SELECTION -> UPDATE SHEET ROW ============ */
function handleFieldSelected(fieldValue, nextScreenId) {
  showScreen(nextScreenId); // navigate immediately — don't block UX on the write
  if (currentStudentRow) {
    callApi('saveStudentField', { row: currentStudentRow, field: fieldValue }).catch(function () {
      /* non-blocking — student already moved on */
    });
  }
}

/* ============ INIT ============ */
buildSections();
