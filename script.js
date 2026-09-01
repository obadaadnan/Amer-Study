/* =========================================================================
   امتحانات الأستاذ عامر الجرابعة — Frontend logic (GitHub Pages)
   -------------------------------------------------------------------------
   Set this to your Apps Script Web App URL after deploying Code.gs:
   https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXX/exec
   ========================================================================= */
const API_URL = 'https://script.google.com/macros/s/AKfycbw3AbxFh1LKYPfVNGUnUSG749K00X0DQFWwCFj1wiidbKFBr4XLl-BP7QLH4aiJWfNE/exec';

/* =====================================================================
   CONFIG — every editable link lives here. Change a value, commit, push.
   Leave a value as '' to show a graceful "coming soon" state instead of
   a broken link — never invent a URL.
   ===================================================================== */
const CONFIG = {
  FINANCIAL_CULTURE_WHATSAPP: 'https://chat.whatsapp.com/HQM03wFeoR25264UPONzcz?s=cl&p=a&mlu=4',
  FINANCIAL_CULTURE_BAG: 'https://drive.google.com/drive/folders/1wZHKaBkI7L3z246RvE5d-KyNM6qsrrr4',
  BUSINESS_MATH_WHATSAPP: '',
  BUSINESS_BAG: '',
  BAG_2010: 'https://drive.google.com/drive/folders/1e6z6VX7lm_IlcA6lUuLrm2lV1v4u4sr8'
};

const PHONE_REGEX = /^(079|078|077)\d{7}$/;
const SESSION_KEY = 'amer_exams_session';

/* =====================================================================
   UNITS / LESSONS CONTENT
   -------------------------------------------------------------------
   One consistent naming style across the whole project:
     unit title   -> "الوحدة (N) <title>"
     lesson item  -> "الدرس (N): <title>"
   Every item is ready to receive a `url` later — leave '' until you have
   the real file/link, students then see a graceful "coming soon" message.
   An item with { type: 'exam', examId: '...' } opens the interactive
   exam engine instead of a plain link — see exam-data.js / EXAM_REGISTRY.
   ===================================================================== */
const UNITS_DATA = {

  '2010-math': [
    {
      title: 'الوحدة (1) الاقترانات والمتبادلات الجبرية',
      items: [
        { title: 'الدرس (1): الاقترانات المضاعفة', url: '' },
        { title: 'الدرس (2): حل معادلات القيمة المطلقة ومتبايناتها', url: '' },
        { title: 'الدرس (3): نظريتا الباقي والعوامل', url: '' },
        { title: 'الدرس (4): الجذور الصماء', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    },
    {
      title: 'الوحدة (2) الاقترانات المثلثية',
      items: [
        { title: 'الدرس (1): قياس الزوايا بالراديان', url: '' },
        { title: 'الدرس (2): الاقترانات المثلثية', url: '' },
        { title: 'الدرس (3): تمثيل الاقترانات الجيبية بيانياً', url: '' },
        { title: 'معمل برمجية جيوجبرا: تمثيل الاقترانات الجيبية بيانياً', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    },
    {
      title: 'الوحدة (3) التفاضل والتطبيقات',
      items: [
        { title: 'الدرس (1): النهايات الاتصال', url: '' },
        { title: 'الدرس (2): الاشتقاق', url: '' },
        { title: 'الدرس (3): القيم العظمى والصغرى', url: '' },
        { title: 'الدرس (4): المشتقة الثانية وتطبيقاتها', url: '' },
        { title: 'الدرس (5): تطبيقات القيم القصوى', url: '' },
        { title: 'الدرس (6): قاعدة السلسلة', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    }
  ],

  // No content provided yet for semester 2 — placeholder units, ready to fill in later.
  '2010-math-s2': [
    { title: 'الوحدة (1)', items: [] },
    { title: 'الوحدة (2)', items: [] },
    { title: 'الوحدة (3)', items: [] }
  ],

  '2009-business-math': [
    {
      title: 'الوحدة (1) المصفوفات',
      items: [
        { title: 'الدرس (1): مقدمة في المصفوفات', type: 'exam', examId: 'business-math-l1' },
        { title: 'الدرس (2): العمليات على المصفوفات', url: '' },
        { title: 'الدرس (3): ضرب المصفوفات', url: '' },
        { title: 'الدرس (4): المحددات وقاعدة كريمر', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    },
    {
      title: 'الوحدة (2) الخوارزميات ونظرية المخططات',
      items: [
        { title: 'الدرس (1): الخوارزميات', url: '' },
        { title: 'الدرس (2): خوارزميات تعبئة الصندوق', url: '' },
        { title: 'الدرس (3): المخططات', url: '' },
        { title: 'الدرس (4): أنواع خاصة من المخططات', url: '' },
        { title: 'الدرس (5): مخططات أويلر', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    },
    {
      title: 'الوحدة (3) البرمجة الخطية',
      items: [
        { title: 'الدرس (1): حل نظام متباينات خطية بمتغيرين بيانيًا', url: '' },
        { title: 'معمل برمجة جوجبرا: تمثيل نظام متباينات خطية بمتغيرين بيانيًا', url: '' },
        { title: 'الدرس (2): البرمجة الخطية', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    }
  ],

  // Shared between حقل الأعمال and حقل اللغات والعلوم الإنسانية
  '2009-financial-culture': [
    {
      title: 'الوحدة (1) الدورة المحاسبية في المؤسسات الخدمية',
      items: [
        { title: 'الدرس (1): الدورة المحاسبية: المفهوم، والمراحل', url: '' },
        { title: 'الدرس (2): نظرية القيد المزدوج والعمليات المالية', url: '' },
        { title: 'الدرس (3): تسجيل القيود المحاسبية', url: '' },
        { title: 'الدرس (4): دفتر اليومية', url: '' },
        { title: 'الدرس (5): دفتر الأستاذ', url: '' },
        { title: 'الدرس (6): ميزان المراجعة', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    },
    {
      title: 'الوحدة (2) القوائم المالية والتحليل المالي',
      items: [
        { title: 'الدرس (1): القوائم المالية: المفهوم، الأنواع، والأهمية', url: '' },
        { title: 'الدرس (2): إقفال الحسابات', url: '' },
        { title: 'الدرس (3): التحليل المالي: المفهوم، والأهمية', url: '' },
        { title: 'الدرس (4): التحليل المالي والنسب', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    },
    {
      title: 'الوحدة (3) القطاع المالي',
      items: [
        { title: 'الدرس (1): الأسواق المالية: المفهوم، الأنواع، والأهمية', url: '' },
        { title: 'الدرس (2): الأصول المالية: المفهوم، والأنواع', url: '' },
        { title: 'الدرس (3): البنك المركزي الأردني والسياسة النقدية', url: '' },
        { title: 'الدرس (4): دور البنك المركزي الأردني في المحافظة على الاستقرار المصرفي والمالي', url: '' },
        { title: 'اختبار نهاية الوحدة', url: '' }
      ]
    }
  ]
};

/* ============ SESSION (localStorage is convenience only — Sheets is the source of truth) ============ */
let currentStudent = null; // { row, name, phone, generation, field }

function saveSession(student) {
  currentStudent = student;
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(student)); } catch (e) { /* ignore */ }
}
function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
function clearSession() {
  currentStudent = null;
  try { localStorage.removeItem(SESSION_KEY); } catch (e) { /* ignore */ }
}

/* ============ NAVIGATION ============ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function (el) {
    el.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderMathIn(target);
}

document.addEventListener('click', function (e) {
  const backBtn = e.target.closest('.back-btn[data-back]');
  if (backBtn) showScreen(backBtn.getAttribute('data-back'));
});

/* ============ KATEX HELPER ============ */
function renderMathIn(el) {
  if (!el || typeof renderMathInElement !== 'function') return;
  renderMathInElement(el, {
    delimiters: [{ left: '\\(', right: '\\)', display: false }],
    throwOnError: false
  });
}

/* ============ REUSABLE: CHOICE CARD ============ */
function renderChoiceCard(container, label, iconText, onClick) {
  const card = document.createElement('div');
  card.className = 'choice-card';
  card.innerHTML =
    '<div class="choice-icon">' + iconText + '</div>' +
    '<div class="choice-label">' + label + '</div>';
  card.addEventListener('click', onClick);
  container.appendChild(card);
}

/* ============ REUSABLE: UNIT CARD (with nested lessons) ============ */
function renderUnits(containerId, dataKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const units = UNITS_DATA[dataKey] || [];

  units.forEach(function (unit, index) {
    const card = document.createElement('div');
    card.className = 'unit-card';

    const header = document.createElement('div');
    header.className = 'unit-header';
    header.innerHTML =
      '<div class="unit-number">' + (index + 1) + '</div>' +
      '<h3 class="unit-title">' + unit.title + '</h3>';
    card.appendChild(header);

    const list = document.createElement('div');
    list.className = 'exam-list';

    if (!unit.items || unit.items.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'exam-empty';
      empty.textContent = 'لا توجد دروس مضافة بعد، سيتم إضافتها قريبًا';
      list.appendChild(empty);
    } else {
      unit.items.forEach(function (item) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'exam-item';
        btn.innerHTML = '<span>' + item.title + '</span><span class="exam-arrow">‹</span>';
        btn.addEventListener('click', function () {
          if (item.type === 'exam') {
            openExamModelChoice(item.examId);
          } else {
            openResource(item);
          }
        });
        list.appendChild(btn);
      });
    }

    card.appendChild(list);
    container.appendChild(card);
  });
}

function openResource(item) {
  document.getElementById('exam-modal-title').textContent = item.title;
  const link = document.getElementById('exam-modal-link');
  const body = document.getElementById('exam-modal-body');
  if (item.url) {
    body.textContent = 'اضغط على الزر أدناه لفتح الملف.';
    link.href = item.url;
    link.hidden = false;
  } else {
    body.textContent = 'سيتم إضافة هذا الملف قريبًا.';
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

/* ============ REUSABLE: BAG / WHATSAPP ACTION CARD ============ */
function renderActionCard(slotId, icon, title, subtitle, url) {
  const slot = document.getElementById(slotId);
  if (!slot) return;
  slot.innerHTML = '';

  const el = document.createElement(url ? 'a' : 'div');
  el.className = 'bag-card' + (url ? '' : ' pending');
  if (url) {
    el.href = url;
    el.target = '_blank';
    el.rel = 'noopener';
  }
  el.innerHTML =
    '<div class="bag-icon">' + icon + '</div>' +
    '<div class="bag-text">' +
      '<p class="bag-title">' + title + '</p>' +
      '<p class="bag-subtitle">' + (url ? subtitle : 'سيتم إضافة الرابط قريبًا') + '</p>' +
    '</div>';
  slot.appendChild(el);
}

/* =========================================================================
   INTERACTIVE EXAM ENGINE
   ========================================================================= */
let examState = null; // { examId, exam, modelName, questions, answers: {qId: letter}, backScreen }

function openExamModelChoice(examId) {
  const exam = EXAM_REGISTRY[examId];
  if (!exam) return;

  document.getElementById('exam-model-title').textContent = exam.examName;
  document.getElementById('exam-model-subtitle').textContent = exam.subject + '، ' + exam.unit;

  const grid = document.getElementById('grid-exam-models');
  grid.innerHTML = '';
  Object.keys(exam.models).forEach(function (modelName, i) {
    renderChoiceCard(grid, modelName, i === 0 ? '١' : '٢', function () {
      startExam(examId, modelName);
    });
  });

  const backBtn = document.getElementById('exam-model-back-btn');
  backBtn.onclick = function () { showScreen(examState ? examState.backScreen : 'screen-2009-business-math'); };

  // Remember which page to return to (the page this lesson item lives on).
  const currentScreen = document.querySelector('.screen.active');
  examState = { examId: examId, backScreen: currentScreen ? currentScreen.id : 'screen-2009-business-math' };

  showScreen('screen-exam-model');
}

function startExam(examId, modelName) {
  const exam = EXAM_REGISTRY[examId];
  const range = exam.models[modelName];
  const questions = exam.questions.filter(function (q) { return q.id >= range.from && q.id <= range.to; });

  examState = {
    examId: examId,
    exam: exam,
    modelName: modelName,
    questions: questions,
    answers: {},
    backScreen: examState ? examState.backScreen : 'screen-2009-business-math'
  };

  document.getElementById('exam-taking-title').textContent = exam.examName;
  document.getElementById('exam-taking-subtitle').textContent = exam.subject + '، ' + modelName;
  document.getElementById('exam-taking-back-btn').onclick = function () { showScreen('screen-exam-model'); };

  renderExamQuestions();
  showScreen('screen-exam-taking');
}

function renderExamQuestions() {
  const list = document.getElementById('exam-questions-list');
  list.innerHTML = '';

  const progress = document.createElement('p');
  progress.className = 'exam-progress';
  progress.textContent = 'عدد الأسئلة: ' + examState.questions.length + '، اختر إجابة كل سؤال ثم اضغط "إنهاء الامتحان"';
  list.appendChild(progress);

  examState.questions.forEach(function (q, index) {
    const card = document.createElement('div');
    card.className = 'exam-question-card';

    const header = document.createElement('div');
    header.className = 'exam-question-header';
    header.innerHTML =
      '<div class="exam-question-number">' + (index + 1) + '</div>' +
      '<p class="exam-question-text">' + q.text + '</p>';
    card.appendChild(header);

    const choicesWrap = document.createElement('div');
    choicesWrap.className = 'exam-choices';

    ['a', 'b', 'c', 'd'].forEach(function (letter) {
      const choiceText = q.choices[letter];
      if (choiceText === undefined) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'exam-choice-btn';
      btn.dataset.question = q.id;
      btn.dataset.letter = letter;
      btn.innerHTML =
        '<span class="exam-choice-letter">' + letter + '</span>' +
        '<span>' + choiceText + '</span>';

      btn.addEventListener('click', function () {
        examState.answers[q.id] = letter;
        choicesWrap.querySelectorAll('.exam-choice-btn').forEach(function (b) {
          b.classList.remove('selected');
        });
        btn.classList.add('selected');
      });

      choicesWrap.appendChild(btn);
    });

    card.appendChild(choicesWrap);
    list.appendChild(card);
  });

  renderMathIn(list);
}

document.getElementById('exam-finish-btn').addEventListener('click', function () {
  const total = examState.questions.length;
  const answeredCount = Object.keys(examState.answers).length;

  if (answeredCount < total) {
    const remaining = total - answeredCount;
    const proceed = window.confirm(
      'لسا في ' + remaining + ' سؤال بدون إجابة. الأسئلة غير المجابة تُحتسب خاطئة. متأكد بدك تنهي الامتحان؟'
    );
    if (!proceed) return;
  }

  finishExam();
});

function finishExam() {
  const exam = examState.exam;
  let correct = 0;
  const answerRecords = [];

  examState.questions.forEach(function (q) {
    const studentAnswer = examState.answers[q.id] || '';
    const correctAnswer = exam.answerKey[q.id];
    const isCorrect = studentAnswer === correctAnswer;
    if (isCorrect) correct++;
    answerRecords.push({ q: q.id, s: studentAnswer, c: correctAnswer, ok: isCorrect });
  });

  const total = examState.questions.length;
  const wrong = total - correct;
  const percentage = Math.round((correct / total) * 1000) / 10; // one decimal place

  examState.result = {
    total: total,
    correct: correct,
    wrong: wrong,
    scoreText: correct + ' / ' + total,
    percentage: percentage,
    answerRecords: answerRecords
  };

  renderExamResult();
  showScreen('screen-exam-result');
  submitExamResult(); // attempt save right away
}

function motivationFor(percentage) {
  if (percentage >= 90) {
    return { emoji: '🔥', text: 'ممتاز جدًا!<br>أداؤك رائع، استمر بنفس القوة وخلينا نشوفك دائمًا في القمة!' };
  }
  if (percentage >= 75) {
    return { emoji: '👏', text: 'أداء رائع!<br>مستواك ممتاز، ومع المزيد من التدريب ستصل للأفضل.' };
  }
  if (percentage >= 60) {
    return { emoji: '💪', text: 'شغل ممتاز!<br>أنت على الطريق الصحيح، راجع أخطاءك وحاول مرة أخرى.' };
  }
  return { emoji: '📚', text: 'لا تستسلم!<br>هذه فرصة ممتازة تعرف فيها نقاط ضعفك وتراجعها قبل الامتحان القادم.' };
}

function renderExamResult() {
  const r = examState.result;
  document.getElementById('exam-result-subtitle').textContent =
    examState.exam.examName + '، ' + examState.modelName;
  document.getElementById('exam-score-percentage').textContent = r.percentage + '%';
  document.getElementById('exam-stat-score').textContent = r.scoreText;
  document.getElementById('exam-stat-correct').textContent = r.correct;
  document.getElementById('exam-stat-wrong').textContent = r.wrong;

  const m = motivationFor(r.percentage);
  document.getElementById('exam-motivation-card').innerHTML =
    '<span style="font-size:26px;display:block;margin-bottom:8px;">' + m.emoji + '</span>' + m.text;

  document.getElementById('exam-save-error').hidden = true;
  document.getElementById('exam-retry-save-btn').hidden = true;

  document.getElementById('exam-retry-btn').onclick = function () {
    startExam(examState.examId, examState.modelName);
  };
  document.getElementById('exam-result-back-btn').onclick = function () {
    showScreen(examState.backScreen);
  };
}

function submitExamResult() {
  if (!currentStudent) return;
  const exam = examState.exam;
  const r = examState.result;

  callApi('submitExamAttempt', {
    row: currentStudent.row,
    subject: exam.subject,
    unit: exam.unit,
    examName: exam.examName,
    model: examState.modelName,
    total: r.total,
    correct: r.correct,
    wrong: r.wrong,
    score: r.scoreText,
    percentage: r.percentage,
    answersJson: JSON.stringify(r.answerRecords)
  })
    .then(function (result) {
      if (!result || !result.success) {
        showExamSaveError();
      }
    })
    .catch(function () {
      showExamSaveError();
    });
}

function showExamSaveError() {
  document.getElementById('exam-save-error').textContent =
    'حدث خطأ أثناء حفظ نتيجتك، يرجى المحاولة مرة أخرى.';
  document.getElementById('exam-save-error').hidden = false;
  const retryBtn = document.getElementById('exam-retry-save-btn');
  retryBtn.hidden = false;
  retryBtn.onclick = function () {
    retryBtn.hidden = true;
    document.getElementById('exam-save-error').hidden = true;
    submitExamResult();
  };
}

/* ============ BUILD STATIC SECTIONS ON LOAD ============ */
function buildSections() {
  // ---- 2010 ----
  const grid2010 = document.getElementById('grid-2010-semesters');
  renderChoiceCard(grid2010, 'الفصل الدراسي الأول', '١', function () {
    showScreen('screen-2010-s1');
    logAccess('2010 - الفصل الأول');
  });
  renderChoiceCard(grid2010, 'الفصل الدراسي الثاني', '٢', function () {
    showScreen('screen-2010-s2');
    logAccess('2010 - الفصل الثاني');
  });
  renderActionCard('bag-2010-slot', '🎒', 'الحقيبة الإلكترونية', 'كل ما تحتاجه في مكان واحد', CONFIG.BAG_2010);
  renderUnits('units-2010-s1', '2010-math');
  renderUnits('units-2010-s2', '2010-math-s2');

  // ---- 2009 — حقل الأعمال (hub: choose subject) ----
  const gridBusinessSubjects = document.getElementById('grid-2009-business-subjects');
  renderChoiceCard(gridBusinessSubjects, '📐 رياضيات الأعمال', '١', function () {
    showScreen('screen-2009-business-math');
    logAccess('2009 حقل الأعمال - رياضيات الأعمال');
  });
  renderChoiceCard(gridBusinessSubjects, '📘 الثقافة المالية', '٢', function () {
    showScreen('screen-2009-business-finlit');
    logAccess('2009 حقل الأعمال - الثقافة المالية');
  });
  renderActionCard(
    'bag-business-slot', '🎒',
    'حقيبة حقل الأعمال الإلكترونية', 'كل ما تحتاجه في مكان واحد',
    CONFIG.BUSINESS_BAG
  );

  renderUnits('units-2009-business-math', '2009-business-math');
  renderActionCard(
    'whatsapp-business-math-slot', '💬',
    'رياضيات الأعمال', 'انضم إلى جروب رياضيات الأعمال',
    CONFIG.BUSINESS_MATH_WHATSAPP
  );

  renderUnits('units-2009-business-finlit', '2009-financial-culture');
  renderActionCard(
    'whatsapp-finlit-business-slot', '💬',
    'الأستاذ عامر الجرابعة | الثقافة المالية', 'انضم إلى جروب الثقافة المالية',
    CONFIG.FINANCIAL_CULTURE_WHATSAPP
  );
  renderActionCard(
    'bag-finlit-business-slot', '🎒',
    'حقيبة الثقافة المالية الإلكترونية', 'كل ما تحتاجه في مكان واحد',
    CONFIG.FINANCIAL_CULTURE_BAG
  );

  // ---- 2009 — حقل اللغات والعلوم الإنسانية ----
  renderUnits('units-2009-languages-finlit', '2009-financial-culture');
  renderActionCard(
    'whatsapp-finlit-languages-slot', '💬',
    'الأستاذ عامر الجرابعة | الثقافة المالية', 'انضم إلى جروب الثقافة المالية',
    CONFIG.FINANCIAL_CULTURE_WHATSAPP
  );
  renderActionCard(
    'bag-finlit-languages-slot', '🎒',
    'الحقيبة الإلكترونية', 'كل ما تحتاجه في مكان واحد',
    CONFIG.FINANCIAL_CULTURE_BAG
  );

  // ---- fallback: 2009 student on file with no field yet ----
  const gridSelectField = document.getElementById('grid-select-field');
  renderChoiceCard(gridSelectField, 'حقل الأعمال', 'أ', function () {
    resolveMissingField('حقل الأعمال');
  });
  renderChoiceCard(gridSelectField, 'حقل اللغات والعلوم الإنسانية', 'ل', function () {
    resolveMissingField('حقل اللغات والعلوم الإنسانية');
  });
}

/* ============ API CALL HELPER ============ */
function callApi(action, params) {
  const query = new URLSearchParams(Object.assign({ action: action }, params || {}));
  return fetch(API_URL + '?' + query.toString())
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    });
}

/* ============ VALIDATION HELPERS ============ */
function isValidPhone(phone) {
  return PHONE_REGEX.test(phone);
}
function setFieldError(fieldId, message) {
  const errorEl = document.getElementById('error-' + fieldId);
  const inputEl = document.getElementById('input-' + fieldId);
  if (errorEl) errorEl.textContent = message || '';
  if (inputEl) inputEl.classList.toggle('invalid', !!message);
}
function setButtonLoading(btnId, loading, loadingLabel, defaultLabel) {
  const btn = document.getElementById(btnId);
  btn.disabled = loading;
  btn.querySelector('.btn-label').textContent = loading ? loadingLabel : defaultLabel;
  btn.querySelector('.btn-spinner').hidden = !loading;
}

/* ============ PHONE ENTRY (login OR detect new student) ============ */
document.getElementById('phone-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const phone = document.getElementById('input-check-phone').value.trim();
  setFieldError('check-phone', '');
  document.getElementById('error-phone-form').textContent = '';

  if (!isValidPhone(phone)) {
    setFieldError('check-phone', 'رقم الهاتف يجب أن يتكون من 10 أرقام ويبدأ بـ 079 أو 078 أو 077.');
    return;
  }

  setButtonLoading('btn-check-phone', true, 'جارٍ التحقق...', 'دخول');

  callApi('checkPhone', { phone: phone })
    .then(function (result) {
      setButtonLoading('btn-check-phone', false, '', 'دخول');

      if (!result || !result.success) {
        document.getElementById('error-phone-form').textContent =
          (result && result.error) || 'حدث خطأ غير متوقع. حاول مرة أخرى.';
        return;
      }

      if (result.found) {
        const student = result.student;
        saveSession(student);
        callApi('touchLogin', { row: student.row }).catch(function () { /* non-blocking */ });
        routeStudent(student);
      } else {
        document.getElementById('input-register-phone').value = phone;
        document.getElementById('register-phone-display').textContent = phone;
        showScreen('screen-register');
      }
    })
    .catch(function () {
      setButtonLoading('btn-check-phone', false, '', 'دخول');
      document.getElementById('error-phone-form').textContent =
        'تعذر الاتصال بالخادم. تحقق من اتصالك بالإنترنت وحاول مرة أخرى.';
    });
});

/* ============ REGISTRATION FORM ============ */
document.getElementById('input-generation').addEventListener('change', function () {
  const isField2009 = this.value === '2009';
  document.getElementById('field-group-field').hidden = !isField2009;
  if (!isField2009) {
    document.getElementById('input-field').value = '';
    setFieldError('field', '');
  }
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const phone = document.getElementById('input-register-phone').value.trim();
  const name = document.getElementById('input-name').value.trim();
  const generation = document.getElementById('input-generation').value;
  const field = document.getElementById('input-field').value;

  let valid = true;
  setFieldError('name', '');
  setFieldError('generation', '');
  setFieldError('field', '');
  document.getElementById('error-register-form').textContent = '';

  if (name.length < 2) {
    setFieldError('name', 'الرجاء إدخال اسمك الكامل.');
    valid = false;
  }
  if (!generation) {
    setFieldError('generation', 'الرجاء اختيار الجيل.');
    valid = false;
  }
  if (generation === '2009' && !field) {
    setFieldError('field', 'الرجاء اختيار الحقل.');
    valid = false;
  }
  if (!valid) return;

  setButtonLoading('btn-register', true, 'جارٍ الحفظ...', 'متابعة');

  callApi('registerStudent', { name: name, phone: phone, generation: generation, field: field })
    .then(function (result) {
      setButtonLoading('btn-register', false, '', 'متابعة');

      if (!result || !result.success) {
        document.getElementById('error-register-form').textContent =
          (result && result.error) || 'حدث خطأ أثناء حفظ بياناتك، يرجى المحاولة مرة أخرى.';
        return;
      }

      saveSession(result.student);
      routeStudent(result.student);
    })
    .catch(function () {
      setButtonLoading('btn-register', false, '', 'متابعة');
      document.getElementById('error-register-form').textContent =
        'حدث خطأ أثناء حفظ بياناتك، يرجى المحاولة مرة أخرى.';
    });
});

/* ============ ROUTING ============ */
function routeStudent(student) {
  showGreeting(student.name);

  if (student.generation === '2010') {
    showScreen('screen-2010');
    logAccess('دخول - 2010');
    return;
  }

  if (student.generation === '2009') {
    if (student.field === 'حقل الأعمال') {
      showScreen('screen-2009-business');
      logAccess('دخول - 2009 حقل الأعمال');
    } else if (student.field === 'حقل اللغات والعلوم الإنسانية') {
      showScreen('screen-2009-languages');
      logAccess('دخول - 2009 حقل اللغات والعلوم الإنسانية');
    } else {
      showScreen('screen-select-field');
    }
    return;
  }

  showScreen('screen-phone');
}

function resolveMissingField(field) {
  if (!currentStudent) return;
  callApi('updateStudentField', { row: currentStudent.row, field: field })
    .catch(function () { /* best-effort */ });
  currentStudent.field = field;
  saveSession(currentStudent);
  routeStudent(currentStudent);
}

function logAccess(section) {
  if (!currentStudent) return;
  callApi('logAccess', { row: currentStudent.row, section: section })
    .catch(function () { /* non-blocking */ });
}

/* ============ GREETING BAR / LOGOUT ============ */
function showGreeting(name) {
  document.getElementById('greeting-text').textContent = 'أهلاً ' + name + ' 👋';
  document.getElementById('greeting-bar').hidden = false;
}
document.getElementById('logout-btn').addEventListener('click', function () {
  clearSession();
  document.getElementById('greeting-bar').hidden = true;
  document.getElementById('phone-form').reset();
  document.getElementById('register-form').reset();
  document.getElementById('field-group-field').hidden = true;
  showScreen('screen-phone');
});

/* ============ INIT ============ */
buildSections();

// If a session was saved locally from a previous visit, verify it against
// the Sheet (source of truth) and skip straight to the right page.
(function initSession() {
  const saved = loadSession();
  if (!saved || !saved.phone) return;

  callApi('checkPhone', { phone: saved.phone })
    .then(function (result) {
      if (result && result.success && result.found) {
        saveSession(result.student);
        callApi('touchLogin', { row: result.student.row }).catch(function () { /* non-blocking */ });
        routeStudent(result.student);
      } else {
        clearSession();
      }
    })
    .catch(function () { /* stay on phone screen if we can't verify */ });
})();
