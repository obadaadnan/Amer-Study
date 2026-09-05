/* =========================================================================
   بنك أسئلة اختبار الدرس الأول: مقدمة في المصفوفات — رياضيات الأعمال
   -------------------------------------------------------------------------
   Transcribed exactly from the uploaded worksheet PDF — wording, numbering,
   choice order, and the answer key are unchanged. Math expressions use
   KaTeX delimiters \( ... \) and are rendered client-side (see script.js).

   MODEL 1 = questions 1–16
   MODEL 2 = questions 17–31
   ========================================================================= */

const EXAM_QUESTIONS_BUSINESS_MATH_L1 = [
  {
    id: 1,
    text: 'ما رتبة المصفوفة: \\(A = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}\\)',
    choices: { a: '\\(0 \\times 0\\)', b: '\\(2 \\times 2\\)', c: '\\(2 \\times 0\\)', d: '\\(0 \\times 2\\)' }
  },
  {
    id: 2,
    text: 'ما رتبة المصفوفة: \\(B = \\begin{bmatrix} 0 & 3 & 5 & 2 \\end{bmatrix}\\)',
    choices: { a: '\\(1 \\times 4\\)', b: '\\(4 \\times 1\\)', c: '\\(1 \\times 1\\)', d: '\\(10 \\times 2\\)' }
  },
  {
    id: 3,
    text: 'إذا كان عدد عناصر المصفوفة B عدداً أولياً، فإن الرتبة الممكنة هي:',
    choices: { a: '\\(n \\times 1\\)', b: '\\(n \\times n\\)', c: '\\(1 \\times 1\\)', d: '\\(n \\times 2\\)' }
  },
  {
    id: 4,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 5 & -8 \\\\ 3 & 1 \\end{bmatrix}\\)، فإن \\(a_{22}\\) يساوي:',
    choices: { a: '\\(-8\\)', b: '\\(3\\)', c: '\\(1\\)', d: '\\(5\\)' }
  },
  {
    id: 5,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 4 \\\\ 6 \\\\ 8 \\end{bmatrix}\\) ، فإن \\(a_{31}\\) يساوي:',
    choices: { a: '\\(31\\)', b: '\\(8\\)', c: '\\(6\\)', d: '\\(4\\)' }
  },
  {
    id: 6,
    text: 'إذا كان: \\(B = \\begin{bmatrix} 0 & 4 & -1 \\\\ 5 & -3 & 6 \\end{bmatrix}\\)، فإن \\(3a_{12}\\) يساوي:',
    choices: { a: '\\(4\\)', b: '\\(12\\)', c: '\\(3\\)', d: '\\(15\\)' }
  },
  {
    id: 7,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 3 & 5 \\\\ -1 & x \\\\ 0 & 4 \\end{bmatrix}\\) ، فجد قيمة العنصر الموجود بالصف الثالث والعمود الثاني:',
    choices: { a: '\\(-1\\)', b: '\\(x\\)', c: '\\(4\\)', d: '\\(5\\)' }
  },
  {
    id: 8,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 3 & 0 \\\\ -1 & 4 \\end{bmatrix}\\) ، فحدد أين يقع العنصر الذي قيمته (-1):',
    choices: { a: '\\(a_{21}\\)', b: '\\(a_{12}\\)', c: '\\(a_{11}\\)', d: '\\(a_{22}\\)' }
  },
  {
    id: 9,
    text: 'إذا علمت أن المصفوفة: \\(Z = \\begin{bmatrix} 5 & 8 & 2 \\\\ -4 & 0 & 3 \\\\ 7 & 6 & 5 \\end{bmatrix}\\) ، فإن رمز العنصر الذي قيمته (2) في المصفوفة (Z) هو:',
    choices: { a: '\\(Z_{22}\\)', b: '\\(Z_{13}\\)', c: '\\(A_{13}\\)', d: '\\(A_{22}\\)' }
  },
  {
    id: 10,
    text: 'إذا علمت أن المصفوفة احتوت على 3 من الصفوف و 2 من الأعمدة فإن عدد عناصرها يساوي:',
    choices: { a: '\\(3\\)', b: '\\(2\\)', c: '\\(6\\)', d: '\\(5\\)' }
  },
  {
    id: 11,
    text: 'إذا علمت أن المصفوفة احتوت على 4 من الصفوف و 3 من الأعمدة فإن عدد عناصرها يساوي:',
    choices: { a: '\\(3 \\times 4\\)', b: '\\(7\\)', c: '\\(4 \\times 3\\)', d: '\\(4 \\times 4\\)' }
  },
  {
    id: 12,
    text: 'حدد نوع المصفوفة الآتية: \\(B = \\begin{bmatrix} 8 \\\\ 3 \\\\ -4 \\end{bmatrix}\\)',
    choices: { a: 'مربعة', b: 'صف', c: 'صفرية', d: 'عمود' }
  },
  {
    id: 13,
    text: 'حدد نوع المصفوفة الآتية: \\(C = \\begin{bmatrix} 3 & -4 & 1 \\end{bmatrix}\\)',
    choices: { a: 'صف', b: 'عمود', c: 'مربعة', d: 'صفرية' }
  },
  {
    id: 14,
    text: 'حدد نوع المصفوفة الآتية: \\(A = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}\\)',
    choices: { a: 'مربعة غير صفرية', b: 'مربعة صفرية', c: 'صف', d: 'عمود' }
  },
  {
    id: 15,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 15 & -8 & 0 \\\\ 9 & 22 & -4 \\\\ -3 & 6 & 12 \\end{bmatrix}\\) فإنّ \\(a_{21} + a_{32}\\) يساوي:',
    choices: { a: '\\(15\\)', b: '\\(-12\\)', c: '\\(5\\)', d: '\\(-2\\)' }
  },
  {
    id: 16,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 4 & -1 & 5 \\\\ 6 & -3 & 9 \\\\ 2 & 7 & -1 \\end{bmatrix}\\) ، فجد \\(a_{21} - a_{13}\\):',
    choices: { a: '\\(4\\)', b: '\\(-1\\)', c: '\\(1\\)', d: '\\(-3\\)' }
  },

  {
    id: 17,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 2 & 5 & -4 \\\\ 6 & 2 & x \\\\ 1 & -x & 7 \\end{bmatrix}\\) ، وكان \\((a_{32})^3 = 27\\) ، فجد قيمة x:',
    choices: { a: '\\(3\\)', b: '\\(-3\\)', c: '\\(9\\)', d: '\\(-9\\)' }
  },
  {
    id: 18,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & 10 \\\\ 5 & x-1 \\end{bmatrix} = \\begin{bmatrix} 2 & x^2+1 \\\\ 5 & 2 \\end{bmatrix}\\) ، فجد قيمة x:',
    choices: { a: '\\(-3\\)', b: '\\(3\\)', c: '\\(\\pm 3\\)', d: '\\(\\pm 9\\)' }
  },
  {
    id: 19,
    text: 'أحدد موقع العنصر الذي قيمته (8) في المصفوفة: \\(B = \\begin{bmatrix} 1 & -1 & 2 \\\\ 3 & 7 & 4 \\\\ 6 & 8 & 0 \\\\ 5 & -6 & 9 \\end{bmatrix}\\)',
    choices: { a: '\\(b_{33}\\)', b: '\\(b_{23}\\)', c: '\\(b_{32}\\)', d: '\\(b_{22}\\)' }
  },
  {
    id: 20,
    text: 'إذا كانت: \\(C = \\begin{bmatrix} 2 & 4 & 0 \\\\ 5 & 1 & 8 \\\\ 7 & 2 & 4 \\end{bmatrix}\\) ، فإن المصفوفة C مربعة من الرتبة:',
    choices: { a: '\\(3\\)', b: '\\(2\\)', c: '\\(8\\)', d: '\\(6\\)' }
  },
  {
    id: 21,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & 4 \\\\ 2x+1 & 0 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 5 & 0 \\end{bmatrix}\\) ، فإن قيمة x هي:',
    choices: { a: '\\(5\\)', b: '\\(4\\)', c: '\\(2\\)', d: '\\(3\\)' }
  },
  {
    id: 22,
    text: 'إذا كانت \\(A = \\begin{bmatrix} 3 & 7 \\\\ x & 5 \\end{bmatrix}\\) ، \\(B = \\begin{bmatrix} 3 & 7 \\\\ 4 & 5 \\end{bmatrix}\\) ، وكانت \\(A = B\\) ، فجد قيمة x:',
    choices: { a: '\\(4\\)', b: '\\(7\\)', c: '\\(3\\)', d: '\\(5\\)' }
  },
  {
    id: 23,
    text: 'حدد نوع ورتبة المصفوفة: \\(A = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}\\)',
    choices: {
      a: 'عمود وغير صفرية، ورتبتها \\(3 \\times 1\\)',
      b: 'عمود وصفرية، ورتبتها \\(3 \\times 1\\)',
      c: 'صف وصفرية، ورتبتها \\(1 \\times 3\\)',
      d: 'عمود وصفرية، ورتبتها \\(3 \\times 0\\)'
    }
  },
  {
    id: 24,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 2 & 5 & -4 \\\\ 6 & 2 & x \\\\ 1 & -x & 7 \\end{bmatrix}\\) وكان \\((a_{32})^3 = 27\\)، فجد قيمة x:',
    choices: { a: '\\(3\\)', b: '\\(-3\\)', c: '\\(9\\)', d: '\\(-9\\)' }
  },
  {
    id: 25,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & x+3 \\\\ 4 & y \\end{bmatrix} = \\begin{bmatrix} 2 & 9 \\\\ 4 & 7 \\end{bmatrix}\\) ، فجد قيم x, y:',
    choices: { a: '\\(x=7,\\ y=6\\)', b: '\\(x=1,\\ y=7\\)', c: '\\(x=6,\\ y=7\\)', d: '\\(x=6,\\ y=1\\)' }
  },
  {
    id: 26,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & x^2-1 \\\\ 5 & x+2 \\end{bmatrix} = \\begin{bmatrix} 2 & 8 \\\\ 5 & 5 \\end{bmatrix}\\) ، فجد قيمة x:',
    choices: { a: '\\(9\\)', b: '\\(3,\\ -3\\)', c: '\\(-3\\)', d: '\\(3\\)' }
  },
  {
    id: 27,
    text: 'إذا كانت المصفوفة تحتوي على 49 عنصراً، وكان عدد الصفوف يساوي عدد الأعمدة، فإن رتبتها هي:',
    choices: { a: '\\(49 \\times 1\\)', b: '\\(1 \\times 49\\)', c: '\\(7 \\times 7\\)', d: '\\(7 \\times 1\\)' }
  },
  {
    id: 28,
    text: 'إذا كانت المصفوفة تحتوي على 17 عنصراً، فأي الرتب الآتية ممكنة:',
    choices: { a: '\\(17 \\times 1\\)', b: '\\(1 \\times 17\\)', c: '\\(7 \\times 10\\)', d: '\\(a+b\\)' }
  },
  {
    id: 29,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} -1 & 0 & 1 \\\\ 3 & 1 & -3 \\end{bmatrix}\\) ، فجد مجموع عناصر الصف الأول:',
    choices: { a: '\\(-1\\)', b: '\\(1\\)', c: '\\(0\\)', d: '\\(2\\)' }
  },
  {
    id: 30,
    text: 'يبين الجدول المجاور نتائج استطلاع آراء عينات من سكان ثلاث قرى متجاورة بخصوص مشروع سياحي يراد إقامته في موقع يتوسط هذه القرى. رتب هذه البيانات في مصفوفة مكوّنة من هذه القرى على أن يكون عدد الآراء المؤيدة مرتباً "ترتيب تصاعدي". بيانات الجدول: القرية A: مؤيّد 800، معارض 130، محايد 70 | القرية B: مؤيّد 460، معارض 250، محايد 40 | القرية C: مؤيّد 1300، معارض 700، محايد 200',
    choices: {
      a: '\\(\\begin{bmatrix} 1300 & 700 & 200 \\\\ 800 & 130 & 70 \\\\ 460 & 250 & 40 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 800 & 130 & 70 \\\\ 460 & 250 & 40 \\\\ 1300 & 700 & 200 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 460 & 230 & 70 \\\\ 800 & 130 & 40 \\\\ 1300 & 700 & 200 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 460 & 250 & 40 \\\\ 800 & 130 & 70 \\\\ 1300 & 700 & 200 \\end{bmatrix}\\)'
    }
  },
  {
    id: 31,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 2 & 3 & 5 \\\\ 1 & 4 & 0 \\end{bmatrix}\\) ، فإن رمز العنصر الذي قيمته 5 في المصفوفة A هو:',
    choices: { a: '\\(a_{31}\\)', b: '\\(a_{13}\\)', c: '\\(a_{15}\\)', d: '\\(a_{51}\\)' }
  }
];

// Answer key, transcribed exactly from the answer table at the end of the PDF.
const EXAM_ANSWER_KEY_BUSINESS_MATH_L1 = {
  1: 'b', 2: 'a', 3: 'a', 4: 'c', 5: 'b', 6: 'b', 7: 'c', 8: 'a', 9: 'b', 10: 'c',
  11: 'c', 12: 'd', 13: 'a', 14: 'b', 15: 'a', 16: 'c', 17: 'b', 18: 'b', 19: 'c', 20: 'a',
  21: 'c', 22: 'a', 23: 'b', 24: 'd', 25: 'c', 26: 'd', 27: 'c', 28: 'd', 29: 'c', 30: 'd',
  31: 'b'
};

/* =========================================================================
   بنك أسئلة اختبار الدرس الأول: الدورة المحاسبية: المفهوم، والمراحل
   الثقافة المالية — جيل 2009
   -------------------------------------------------------------------------
   Transcribed exactly from the uploaded worksheet image — wording, order,
   choice order, and the answer key are unchanged. Choices in the original
   are labeled with Arabic letters (أ ب ج د), preserved via the exam's
   `labels` config in EXAM_REGISTRY below rather than being changed to
   Latin letters. Pure Arabic text (no math notation), so no KaTeX needed.
   ========================================================================= */
const EXAM_QUESTIONS_FIN_CULTURE_L1 = [
  {
    id: 1,
    text: 'تُعد الأساس الذي يُبنى عليه فهم الأنشطة المالية والأداء الاقتصادي للمؤسسات:',
    choices: { a: 'البيانات المحاسبية', b: 'الاستدامة المالية', c: 'الدورة المحاسبية', d: 'العمليات الماليّة' }
  },
  {
    id: 2,
    text: 'تشير العبارة الآتية "الوفاء بالمتطلبات القانونية والضريبية عن طريق تقديم تقارير مالية" على أهمية:',
    choices: { a: 'البيانات المحاسبية', b: 'الدورة المحاسبية', c: 'الاستدامة المالية', d: 'العمليات الماليّة' }
  },
  {
    id: 3,
    text: 'إحدى الآتية تُعد من أهمية الدورة المحاسبية:',
    choices: {
      a: 'تنظيم المعاملات المالية والمستندات',
      b: 'تسجيل العمليات المالية في دفتر اليومية',
      c: 'ترحيل القيود إلى دفتر الأستاذ وترصيدها',
      d: 'تحديد العمليات المالية وتحليلها'
    }
  },
  {
    id: 4,
    text: 'تُقدّم صورة واضحة وشاملة عن أداء المؤسسة المالي:',
    choices: { a: 'العمليات المالية', b: 'الاستدامة', c: 'دفتر اليومية', d: 'المعلومات المحاسبية' }
  },
  {
    id: 5,
    text: 'الجهة المستفيدة من المعلومة المحاسبية الآتية: "قدرة الشركة على الوفاء بالتزاماتها المالية" هي:',
    choices: { a: 'المُقرِضون', b: 'العملاء', c: 'الحكومة', d: 'مجلس الإدارة' }
  },
  {
    id: 6,
    text: 'يُعد الخطوة الأولى لتسجيل العمليات المالية:',
    choices: {
      a: 'تحديد العمليات المالية وتحليلها',
      b: 'ترحيل القيود إلى دفتر الأستاذ',
      c: 'إعداد ميزان المراجعة',
      d: 'التسجيل في دفتر اليومية'
    }
  },
  {
    id: 7,
    text: 'مرحلة في الدورة المحاسبية تمثّل أهم الأدوات التي تستخدمها المؤسسات في توثيق أدائها المالي خلال مدّة زمنية معينة:',
    choices: {
      a: 'إعداد ميزان المراجعة',
      b: 'إعداد القوائم المالية',
      c: 'ترحيل القيود إلى دفتر الأستاذ',
      d: 'إقفال الحسابات'
    }
  },
  {
    id: 8,
    text: 'المرحلة الثالثة في الدورة المحاسبية هي:',
    choices: {
      a: 'إعداد ميزان المراجعة',
      b: 'إعداد القوائم المالية',
      c: 'ترحيل القيود إلى دفتر الأستاذ وترصيدها',
      d: 'تسجيل العمليات في دفتر اليومية'
    }
  },
  {
    id: 9,
    text: 'جميع الآتية تمثّل المستفيدين من المعلومات المحاسبية من خارج الشركة ما عدا:',
    choices: { a: 'المُلّاك', b: 'المُقرِضون (الدائنون)', c: 'الأجهزة الحكومية', d: 'مجلس الإدارة' }
  },
  {
    id: 10,
    text: 'إحدى الآتية تمثّل الجهة المستفيدة من المعلومات المحاسبية من داخل الشركة:',
    choices: { a: 'الموظفون', b: 'المُلّاك', c: 'المُقرِضون', d: 'الأجهزة الحكومية' }
  },
  {
    id: 11,
    text: 'الجهة المستفيدة من المعلومة المحاسبية الآتية: "الرقابة على الأداء وتحصيل الضرائب" هي:',
    choices: { a: 'الموظفون', b: 'إدارة الشركة', c: 'الأجهزة الحكومية', d: 'الدائنون' }
  }
];

// Answer key, transcribed exactly from the answer table at the bottom of
// the worksheet image (original letters أ/ب/ج/د mapped to a/b/c/d in the
// same left-to-right position order used in the `choices` objects above).
const EXAM_ANSWER_KEY_FIN_CULTURE_L1 = {
  1: 'c', 2: 'b', 3: 'a', 4: 'd', 5: 'a', 6: 'd', 7: 'b', 8: 'c', 9: 'd', 10: 'a', 11: 'c'
};

/* =========================================================================
   بنك أسئلة امتحان الدرس الأول: الاقترانات المتشعبة — رياضيات، جيل 2010
   -------------------------------------------------------------------------
   Transcribed exactly from the uploaded original exam PDF (النموذج الأول),
   25 questions. Graphs/diagrams are the ORIGINAL images cropped directly
   from the source PDF (assets/exam-2010-l1/) — not redrawn or approximated
   — so axis direction, scale, points, and curves exactly match the
   teacher's exam. Answer key transcribed exactly from the separately
   uploaded official answer sheet image.

   NOTE: the exam's own title/header calls this lesson "الاقترانات
   المتشعبة" (consistently on the cover page and exam header) — the site
   previously had this lesson labeled "الاقترانات المضاعفة". Corrected the
   lesson title in UNITS_DATA to match the exam's actual name, since exact
   accuracy takes priority.

   Piecewise functions use KaTeX's \cases environment, and each graph is
   an <img> (rendered via the `image` field) rather than plain text, so
   axis orientation can never be affected by RTL — see script.js's
   renderExamQuestions/renderExamReview for how `image` and image-based
   choices are displayed.
   ========================================================================= */
const EXAM_QUESTIONS_MATH_2010_L1 = [
{
    id: 1,
    text: 'إذا كان \\(f(x) = \\left\\{\\begin{array}{rl} -2x^2+1 & x < -1 \\\\ 6 & -1 \\le x < 4 \\\\ 1-x^3 & x \\ge 4 \\end{array}\\right.\\)، فما قيمة \\(f(-2)\\)؟',
    choices: { a: '\\(6\\)', b: '\\(-7\\)', c: '\\(9\\)', d: '\\(7\\)' }
  }
  {
    id: 2,
    text: 'إذا كان \\(f(x) = \\begin{cases} 3-x & -3 \\le x < 1 \\\\ 2x^2 & x > 1 \\end{cases}\\)، حدد مجال \\(f(x)\\)؟',
    choices: {
      a: '\\([-3,1) \\cup (1,\\infty)\\)', b: '\\((-3,\\infty)\\)',
      c: '\\([-3,1] \\cup [1,\\infty)\\)', d: '\\([-3,\\infty)\\)'
    }
  },
  {
    id: 3,
    text: 'من خلال التمثيل البياني الآتي حدد المدى لـ \\(f(x)\\)؟',
    image: 'assets/exam-2010-l1/q3.png',
    choices: { a: '\\([-1,\\infty]\\)', b: '\\((-1,\\infty)\\)', c: '\\((1,\\infty)\\)', d: '\\([1,\\infty)\\)' }
  },
  {
    id: 4,
    text: 'من خلال التمثيل البياني الآتي، جد قيمة \\(f(1)\\)؟',
    image: 'assets/exam-2010-l1/q4.png',
    choices: { a: '\\(1\\)', b: '\\(0\\)', c: '\\(3\\)', d: '\\(-1\\)' }
  },
  {
    id: 5,
    text: 'من خلال التمثيل البياني جد معادلة المستقيم بصيغة الميل والمقطع:',
    image: 'assets/exam-2010-l1/q5.png',
    choices: {
      a: '\\(y=\\frac{1}{2}x+1\\)', b: '\\(y=2x-1\\)',
      c: '\\(y=-2x+1\\)', d: '\\(y=2x+1\\)'
    }
  },
  {
    id: 6,
    text: 'أي الآتية تمثل منحنى الاقتران: \\(f(x)=|2x-5|\\)؟',
    choices: {
      a: { image: 'assets/exam-2010-l1/q6-a.png' },
      b: { image: 'assets/exam-2010-l1/q6-b.png' },
      c: { image: 'assets/exam-2010-l1/q6-c.png' },
      d: { image: 'assets/exam-2010-l1/q6-d.png' }
    }
  },
  {
    id: 7,
    text: 'إحداثيات رأس الاقتران هي:',
    image: 'assets/exam-2010-l1/q7-11.png',
    choices: { a: '\\((0,-3)\\)', b: '\\((-3,0)\\)', c: '\\((3,0)\\)', d: '\\((0,3)\\)' }
  },
  {
    id: 8,
    text: 'قاعدة الاقتران الممثل بيانياً هي:',
    image: 'assets/exam-2010-l1/q7-11.png',
    choices: {
      a: '\\(f(x)=\\frac{4}{3}|x+3|\\)', b: '\\(f(x)=\\frac{4}{3}|x-3|\\)',
      c: '\\(f(x)=-\\frac{4}{3}|x+3|\\)', d: '\\(f(x)=|x+3|\\)'
    }
  },
  {
    id: 9,
    text: 'قيمة الثابت \\(a\\) في قاعدة الاقتران \\(f(x)=a|x+3|\\):',
    image: 'assets/exam-2010-l1/q7-11.png',
    choices: { a: '\\(-\\frac{4}{3}\\)', b: '\\(\\frac{3}{4}\\)', c: '\\(\\frac{4}{3}\\)', d: '\\(1\\)' }
  },
  {
    id: 10,
    text: 'المجال لهذا الاقتران هو:',
    image: 'assets/exam-2010-l1/q7-11.png',
    choices: {
      a: '\\(\\{x \\mid x \\ge -3\\}\\)', b: '\\(\\{x \\mid x \\le -3\\}\\)',
      c: '\\(\\mathbb{R}\\)', d: '\\(\\{x \\mid x \\neq -3\\}\\)'
    }
  },
  {
    id: 11,
    text: 'مدى الاقتران هو:',
    image: 'assets/exam-2010-l1/q7-11.png',
    choices: { a: '\\(y \\ge 0\\)', b: '\\(y > 0\\)', c: '\\(y \\le 0\\)', d: '\\(y < 0\\)' }
  },
  {
    id: 12,
    text: 'إذا علمت أنّ: \\(f(x) = \\begin{cases} 1 & x \\le 3 \\\\ -1 & x > 3 \\end{cases}\\)، فإن مدى الاقتران \\(f(x)\\) هو:',
    choices: { a: '\\((-1,1)\\)', b: '\\(\\{-1,1\\}\\)', c: '\\(\\{3,-3\\}\\)', d: '\\([-1,1]\\)' }
  },
  {
    id: 13,
    text: 'زادت شركة رواتب موظفيها وفق الأسس الآتية: الرواتب التي تقل عن 400 دينار زادت بنسبة 15%، والرواتب من 400 دينار إلى أقل من 600 دينار زادت بنسبة 10%، مع علاوة ثابتة بقيمة 20 ديناراً. أكتب اقتراناً متشعباً لحساب الراتب الجديد لموظفي الشركة.',
    choices: {
      a: '\\(f(x)=\\begin{cases} 1.15x & x<400 \\\\ 1.1x+20 & 400 \\le x<600 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} 0.15x & x<400 \\\\ 1.1x & 400 \\le x<600 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} 0.15x & x<400 \\\\ 1.1x+20 & 400 < x \\le 600 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} 1.15x & x \\le 400 \\\\ 1.1x+20 & 400 < x \\le 600 \\end{cases}\\)'
    }
  },
  {
    id: 14,
    text: 'قاعدة الاقتران الممثل بيانياً هي:',
    image: 'assets/exam-2010-l1/q14.png',
    choices: {
      a: '\\(f(x)=\\frac{1}{3}|x|\\)', b: '\\(f(x)=3|x|\\)',
      c: '\\(f(x)=\\frac{-1}{3}|x|\\)', d: '\\(f(x)=-3|x|\\)'
    }
  },
  {
    id: 15,
    text: 'قاعدة الاقتران المتشعب الممثل بيانياً في الشكل الآتي هي:',
    image: 'assets/exam-2010-l1/q15.png',
    choices: {
      a: '\\(f(x)=\\begin{cases} -x+2 & x \\neq 1 \\\\ 3 & x=1 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} x+2 & x \\neq 1 \\\\ 3 & x=1 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} x+1 & x \\neq 1 \\\\ 2 & x=1 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} x-2 & x \\neq 1 \\\\ 3 & x=1 \\end{cases}\\)'
    }
  },
  {
    id: 16,
    text: 'أي الآتية تمثل منحنى الاقتران: \\(f(x)=-|x-4|+1\\)؟',
    choices: {
      a: { image: 'assets/exam-2010-l1/q16-a.png' },
      b: { image: 'assets/exam-2010-l1/q16-b.png' },
      c: { image: 'assets/exam-2010-l1/q16-c.png' },
      d: { image: 'assets/exam-2010-l1/q16-d.png' }
    }
  },
  {
    id: 17,
    text: 'من خلال التمثيل البياني الآتي حدد المدى لـ \\(f(x)\\)؟',
    image: 'assets/exam-2010-l1/q17.png',
    choices: {
      a: '\\((-\\infty,5] \\cup [6,\\infty)\\)', b: '\\((-\\infty,5) \\cup [6,\\infty)\\)',
      c: '\\((-\\infty,5) \\cup (6,\\infty)\\)', d: '\\((-\\infty,\\infty)\\)'
    }
  },
  {
    id: 18,
    text: 'من خلال التمثيل البياني الآتي حدد المدى لـ \\(f(x)\\)؟',
    image: 'assets/exam-2010-l1/q18.png',
    choices: {
      a: '\\(\\mathbb{R}-\\{7\\}\\)', b: '\\(\\mathbb{R}-\\{3\\}\\)',
      c: '\\((-\\infty,\\infty)\\)', d: '\\((-\\infty,\\infty) \\cup (3,\\infty)\\)'
    }
  },
  {
    id: 19,
    text: 'إذا كان: \\(f(x)=\\begin{cases} 1-2x & x<1 \\\\ -3+x^2 & x=1 \\\\ -2 & x>1 \\end{cases}\\)، فإنّ \\(3f(0)\\) تساوي؟',
    choices: { a: '\\(0\\)', b: '\\(3\\)', c: '\\(-3\\)', d: '\\(-1\\)' }
  },
  {
    id: 20,
    text: 'إذا كان: \\(f(x)=\\begin{cases} 3x^2+x & x \\le -1 \\\\ 4 & x>-1 \\end{cases}\\)، فإنّ \\(f(-1)-2\\) تساوي؟',
    choices: { a: '\\(2\\)', b: '\\(1\\)', c: '\\(-1\\)', d: '\\(0\\)' }
  },
  {
    id: 21,
    text: 'قاعدة الاقتران المتشعب للشكل الآتي الممثل بيانياً:',
    image: 'assets/exam-2010-l1/q21.png',
    choices: {
      a: '\\(f(x)=\\begin{cases} 1 & -4 \\le x \\le -1 \\\\ -x+1 & -1<x \\le 2 \\\\ -2 & 2<x \\le 5 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} -1 & -4 \\le x \\le -1 \\\\ x+1 & -1<x \\le 2 \\\\ -2 & 2<x \\le 5 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} 1 & -4<x<-1 \\\\ -x+1 & -1 \\le x<2 \\\\ -2 & x<2 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} 1 & -4<x<-1 \\\\ x+1 & -1<x \\le 2 \\\\ 2 & 2<x \\le 5 \\end{cases}\\)'
    }
  },
  {
    id: 22,
    text: 'قاعدة الاقتران المتشعب للشكل الآتي الممثل بيانياً:',
    image: 'assets/exam-2010-l1/q22.png',
    choices: {
      a: '\\(f(x)=\\begin{cases} x & x \\le 0 \\\\ \\frac{1}{3}x+2 & x>0 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} x & x \\le 0 \\\\ 3x+1 & x>0 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} x & x \\ge 2 \\\\ \\frac{1}{3}x+2 & x<2 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} x & x<0 \\\\ 3x+1 & x \\ge 0 \\end{cases}\\)'
    }
  },
  {
    id: 23,
    text: 'أيّ الاقترانات الآتية يُمثّل قاعدة المنحنى المجاور؟',
    image: 'assets/exam-2010-l1/q23.png',
    choices: { a: '\\(g(x)=|x+1|\\)', b: '\\(g(x)=|x-1|\\)', c: '\\(g(x)=|x|-1\\)', d: '\\(g(x)=-|x|\\)' }
  },
  {
    id: 24,
    text: 'إذا كان: \\(f(x)=\\begin{cases} kx & x<0 \\\\ 3-2x & x \\ge 0 \\end{cases}\\)، فإنّ قيمة الثابت \\(k\\) التي تجعل \\(f(0)=f(-1)\\) هي؟',
    choices: { a: '\\(-3\\)', b: '\\(3\\)', c: '\\(-1\\)', d: '\\(1\\)' }
  },
  {
    id: 25,
    text: 'إذا كان \\(f(x)=|7x-5|+3\\) فإنّ أي الاقترانات الآتية يُمثّل إعادة التعريف الصحيحة للاقتران \\(f(x)\\):',
    choices: {
      a: '\\(f(x)=\\begin{cases} 7x-2 & x \\ge \\frac{7}{5} \\\\ -7+8 & x<\\frac{7}{5} \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} 7x+2 & x \\ge \\frac{5}{7} \\\\ 7x+8 & x<\\frac{5}{7} \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} 7x-2 & x \\ge \\frac{5}{7} \\\\ -7x+8 & x<\\frac{5}{7} \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} 7x-2 & x \\ge 3 \\\\ -7x+8 & x<3 \\end{cases}\\)'
    }
  }
];

// Answer key, transcribed exactly from the official answer-sheet image
// (النموذج الأول — الوحدة الأولى), questions 1–25.
const EXAM_ANSWER_KEY_MATH_2010_L1 = {
  1: 'b', 2: 'a', 3: 'b', 4: 'c', 5: 'd', 6: 'a', 7: 'b', 8: 'a', 9: 'c', 10: 'c',
  11: 'a', 12: 'b', 13: 'a', 14: 'd', 15: 'a', 16: 'd', 17: 'b', 18: 'a', 19: 'b', 20: 'd',
  21: 'a', 22: 'a', 23: 'c', 24: 'a', 25: 'c'
};

// A single exam registry — one entry per interactive exam in the site.
// Each lesson item that should open an exam (instead of a plain resource
// link) references one of these ids via { type: 'exam', examId: '...' }.
const EXAM_REGISTRY = {
  'business-math-l1': {
    subject: 'رياضيات الأعمال',
    unit: 'الوحدة (1) المصفوفات',
    examName: 'الدرس (1): مقدمة في المصفوفات',
    questions: EXAM_QUESTIONS_BUSINESS_MATH_L1,
    answerKey: EXAM_ANSWER_KEY_BUSINESS_MATH_L1,
    // No labels field -> engine falls back to the default a/b/c/d display,
    // matching this exam's original Latin-lettered choices.
    models: {
      'النموذج الأول': { from: 1, to: 16 },
      'النموذج الثاني': { from: 17, to: 31 }
    }
  },

  'fin-culture-l1': {
    subject: 'الثقافة المالية',
    unit: 'الوحدة (1) الدورة المحاسبية في المؤسسات الخدمية',
    examName: 'الدرس (1): الدورة المحاسبية: المفهوم، والمراحل',
    questions: EXAM_QUESTIONS_FIN_CULTURE_L1,
    answerKey: EXAM_ANSWER_KEY_FIN_CULTURE_L1,
    // This worksheet labels its choices with Arabic letters (أ ب ج د),
    // not Latin a/b/c/d — the engine displays whatever is given here
    // while still grading against the internal a/b/c/d keys below.
    labels: { a: 'أ', b: 'ب', c: 'ج', d: 'د' },
    models: {
      'النموذج الأول': { from: 1, to: 11 }
    }
  },

  'math2010-l1': {
    subject: 'رياضيات',
    unit: 'الوحدة (1) الاقترانات والمتبادلات الجبرية',
    examName: 'الدرس (1): الاقترانات المتشعبة',
    questions: EXAM_QUESTIONS_MATH_2010_L1,
    answerKey: EXAM_ANSWER_KEY_MATH_2010_L1,
    // Latin a/b/c/d, matching this exam's original choice labels -> no labels override needed.
    models: {
      'النموذج الأول': { from: 1, to: 25 }
    }
  }
};
