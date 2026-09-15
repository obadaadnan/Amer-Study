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
    choices: { a: 'العمليات المالية', b: 'الاستدامة', c: 'المعلومات المحاسبية', d: 'دفتر اليومية' }
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
   بنك أسئلة اختبار الدرس الثاني: نظرية القيد المزدوج والعمليات المالية
   الثقافة المالية — جيل 2009
   -------------------------------------------------------------------------
   Transcribed exactly from two uploaded worksheet images — ONE single exam,
   19 questions total. Image 1 (15 questions) provides Q1–15, Image 2
   (4 questions, printed as a separate "السؤال الثالث" section with its own
   local 1–4 numbering) continues the SAME exam as global Q16–19 — confirmed
   by cross-checking: the image's own local answer-key box (1=ب,2=د,3=ج,4=أ)
   matches the provided global key for 16–19 (B,D,C,A) exactly. No model
   split — a single "النموذج الأول" entry covering all 19 questions, same
   pattern as the other single-model exams already on the site.
   Choices use the original Arabic letters (أ ب ج د), same as Lesson 1.
   Pure Arabic text, no math notation — no KaTeX needed.
   ========================================================================= */
const EXAM_QUESTIONS_FIN_CULTURE_L2 = [
  {
    id: 1,
    text: 'يمكن بها تسجيل كل عملية مالية من وجهتين مختلفتين لضمان الدقة والتوازن في الحسابات تعتبر من أهمية:',
    choices: { a: 'دفتر اليومية', b: 'الدورة المحاسبية', c: 'نظرية القيد المزدوج', d: 'ميزان المراجعة' }
  },
  {
    id: 2,
    text: 'من المبادئ الأساسية (الخصائص) التي تنص عليها نظرية القيد المزدوج:',
    choices: {
      a: 'التوازن بين حسابات الدائن وحسابات المدين',
      b: 'اشتمال كل عملية مالية على طرف واحد فقط',
      c: 'عدم اشتراط وجود طرفين في العمليات المالية',
      d: 'وجوب تسجيل الأصول فقط في العمليات المالية'
    }
  },
  {
    id: 3,
    text: 'الحساب الذي يعكس (يُمثِّل) الالتزامات المالية التي يتعيَّن على المؤسسة تسديدها:',
    choices: { a: 'المدين', b: 'الدائن', c: 'الإيرادات', d: 'حقوق الملكية' }
  },
  {
    id: 4,
    text: 'يشير مصطلح المدين إلى:',
    choices: {
      a: 'نقصان الأصول', b: 'النقصان في المصاريف',
      c: 'الزيادة في الالتزامات أو الإيرادات', d: 'الزيادة في الأصول أو المصروفات'
    }
  },
  {
    id: 5,
    text: 'العبارة الآتية "يجب فهم كيف ستؤثر العملية المالية في الميزانية العمومية والقوائم المالية الأخرى" إلى إحدى الخطوات المنهجية التي تتضمن تسجيل العملية المالية:',
    choices: {
      a: 'تحليل الأثر المالي', b: 'تحديد نوع العملية المالية',
      c: 'تعرّف أنواع الحسابات', d: 'إعداد قيود اليومية'
    }
  },
  {
    id: 6,
    text: 'الخطوة الأخيرة من الخطوات المنهجية التي تضمن دقة تسجيل العمليات المالية هي:',
    choices: {
      a: 'تحليل الأثر المالي', b: 'إعداد قيود اليومية',
      c: 'تعرّف أنواع الحسابات', d: 'تحديد نوع العملية المالية'
    }
  },
  {
    id: 7,
    text: 'من الحسابات التي تصنف ضمن الاستثمارات طويلة الأجل:',
    choices: { a: 'حقوق النشر', b: 'الأثاث والمركبات', c: 'النقد في البنوك والصندوق', d: 'الأسهم والسندات' }
  },
  {
    id: 8,
    text: 'مستند رسمي يثبت التزامات مالية تتعهَّد المؤسسة بموجبها أن تدفع مبلغ معين مستقبلاً:',
    choices: { a: 'أوراق الدفع', b: 'أوراق القبض', c: 'تقديم خدمة', d: 'كشوفات مالية' }
  },
  {
    id: 9,
    text: 'قيمة الأصول المتبقية بعد خصم الالتزامات هي:',
    choices: { a: 'مصروفات', b: 'الالتزامات', c: 'حقوق ملكية', d: 'الإيرادات' }
  },
  {
    id: 10,
    text: 'اشترت مؤسسة التميُّز أجهزة ومعدّات بمبلغ 8000 دينار ودفعت المبلغ نقدًا، فإن الحساب الذي يتأثر وينقص هو حساب:',
    choices: { a: 'أجهزة ومعدات', b: 'الصندوق', c: 'المصروف', d: 'الالتزامات' }
  },
  {
    id: 11,
    text: 'الحساب إذا زادت قيمته فهو مدين، وإذا نقصت قيمته فهو دائن:',
    choices: { a: 'حقوق ملكية', b: 'الإيرادات', c: 'الالتزامات', d: 'المصروفات' }
  },
  {
    id: 12,
    text: 'حساب إذا أُخِذ منه فهو مدين، وإذا أُعْطِيَ فهو دائن:',
    choices: { a: 'الأصول', b: 'المصروفات', c: 'الصندوق', d: 'الإيرادات' }
  },
  {
    id: 13,
    text: 'عند تحصيل المؤسسة مستحقات نقدية من العملاء، فإن الحساب التي يتأثر وينقص هو:',
    choices: { a: 'الصندوق', b: 'البنك', c: 'مدينون', d: 'دائنون' }
  },
  {
    id: 14,
    text: 'إذا تسلَّم فرد من البنك ثم إيداعها بالصندوق فإن التأثير المحاسبي لهذه العملية هو:',
    choices: {
      a: 'زيادة الإيرادات فقط', b: 'زيادة الأصول فقط',
      c: 'زيادة الإيرادات والأصول', d: 'نقصان الإيرادات والأصول'
    }
  },
  {
    id: 15,
    text: 'إذا تم صرف رواتب الموظفين من صندوق الشركة، فإن التأثير المحاسبي لهذه العملية هو:',
    choices: {
      a: 'زيادة المصاريف ونقص الأصول', b: 'نقصان الأصول ونقصان المصاريف',
      c: 'نقصان المصاريف وزيادة الأصول', d: 'زيادة الأصول والمصاريف'
    }
  },
  {
    id: 16,
    text: 'يشير مصطلح (الدائن) إلى:',
    choices: {
      a: 'الزيادة في الأصول أو المصروفات', b: 'الزيادة في الالتزامات أو الإيرادات',
      c: 'زيادة الأصول', d: 'النقصان في الإيرادات أو الالتزامات'
    }
  },
  {
    id: 17,
    text: 'من الحسابات التي تصنَّف ضمن الاصول المتداوَلَة:',
    choices: { a: 'الأثاث والمركبات', b: 'المباني والآلات', c: 'حقوق النشر', d: 'النقد في البنوك والصندوق' }
  },
  {
    id: 18,
    text: 'يُنظَر إلى المخزون بوصفه:',
    choices: { a: 'أصولاً ثابتة', b: 'أصولاً غير ملموسة', c: 'أصولاً متداوَلَة', d: 'التزامات' }
  },
  {
    id: 19,
    text: 'الحساب الذي يُسجَّل على أساس أنه مدين في حال زيادة قيمته هو:',
    choices: { a: 'الأصول', b: 'الإيرادات', c: 'الالتزامات', d: 'حقوق الملكية' }
  }
];

// Answer key — provided directly by the teacher, cross-verified against
// the local answer-key box printed on the second image (which independently
// confirmed questions 16–19).
const EXAM_ANSWER_KEY_FIN_CULTURE_L2 = {
  1: 'c', 2: 'a', 3: 'b', 4: 'd', 5: 'a', 6: 'b', 7: 'd', 8: 'a', 9: 'c', 10: 'b',
  11: 'd', 12: 'd', 13: 'c', 14: 'c', 15: 'a', 16: 'b', 17: 'd', 18: 'c', 19: 'a'
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
    text: 'إذا كان \\(f(x) = \\begin{cases} -2x^2+1 \\, , \\, x &lt; -1 \\\\ 6 \\, , \\, -1 \\le x &lt; 4 \\\\ 1-x^3 \\, , \\, x \\ge 4 \\end{cases}\\)، فما قيمة \\(f(-2)\\)؟',
    choices: { a: '\\(6\\)', b: '\\(-7\\)', c: '\\(9\\)', d: '\\(7\\)' }
  },
  {
    id: 2,
    text: 'إذا كان \\(f(x) = \\begin{cases} 3-x \\, , \\, -3 \\le x &lt; 1 \\\\ 2x^2 \\, , \\, x &gt; 1 \\end{cases}\\)، حدد مجال \\(f(x)\\)؟',
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
    choices: { a: '\\(y \\ge 0\\)', b: '\\(y &gt; 0\\)', c: '\\(y \\le 0\\)', d: '\\(y &lt; 0\\)' }
  },
  {
    id: 12,
    text: 'إذا علمت أنّ: \\(f(x) = \\begin{cases} 1 \\, , \\, x \\le 3 \\\\ -1 \\, , \\, x &gt; 3 \\end{cases}\\)، فإن مدى الاقتران \\(f(x)\\) هو:',
    choices: { a: '\\((-1,1)\\)', b: '\\(\\{-1,1\\}\\)', c: '\\(\\{3,-3\\}\\)', d: '\\([-1,1]\\)' }
  },
  {
    id: 13,
    text: 'زادت شركة رواتب موظفيها وفق الأسس الآتية: الرواتب التي تقل عن 400 دينار زادت بنسبة 15%، والرواتب من 400 دينار إلى أقل من 600 دينار زادت بنسبة 10%، مع علاوة ثابتة بقيمة 20 ديناراً. أكتب اقتراناً متشعباً لحساب الراتب الجديد لموظفي الشركة.',
    choices: {
      a: '\\(f(x)=\\begin{cases} 1.15x \\, , \\, x &lt;400 \\\\ 1.1x+20 \\, , \\, 400 \\le x &lt;600 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} 0.15x \\, , \\, x &lt;400 \\\\ 1.1x \\, , \\, 400 \\le x &lt;600 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} 0.15x \\, , \\, x &lt;400 \\\\ 1.1x+20 \\, , \\, 400 &lt; x \\le 600 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} 1.15x \\, , \\, x \\le 400 \\\\ 1.1x+20 \\, , \\, 400 &lt; x \\le 600 \\end{cases}\\)'
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
      a: '\\(f(x)=\\begin{cases} -x+2 \\, , \\, x \\neq 1 \\\\ 3 \\, , \\, x=1 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} x+2 \\, , \\, x \\neq 1 \\\\ 3 \\, , \\, x=1 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} x+1 \\, , \\, x \\neq 1 \\\\ 2 \\, , \\, x=1 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} x-2 \\, , \\, x \\neq 1 \\\\ 3 \\, , \\, x=1 \\end{cases}\\)'
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
    text: 'إذا كان: \\(f(x)=\\begin{cases} 1-2x \\, , \\, x &lt;1 \\\\ -3+x^2 \\, , \\, x=1 \\\\ -2 \\, , \\, x &gt;1 \\end{cases}\\)، فإنّ \\(3f(0)\\) تساوي؟',
    choices: { a: '\\(0\\)', b: '\\(3\\)', c: '\\(-3\\)', d: '\\(-1\\)' }
  },
  {
    id: 20,
    text: 'إذا كان: \\(f(x)=\\begin{cases} 3x^2+x \\, , \\, x \\le -1 \\\\ 4 \\, , \\, x &gt;-1 \\end{cases}\\)، فإنّ \\(f(-1)-2\\) تساوي؟',
    choices: { a: '\\(2\\)', b: '\\(1\\)', c: '\\(-1\\)', d: '\\(0\\)' }
  },
  {
    id: 21,
    text: 'قاعدة الاقتران المتشعب للشكل الآتي الممثل بيانياً:',
    image: 'assets/exam-2010-l1/q21.png',
    choices: {
      a: '\\(f(x)=\\begin{cases} 1 \\, , \\, -4 \\le x \\le -1 \\\\ -x+1 \\, , \\, -1 &lt;x \\le 2 \\\\ -2 \\, , \\, 2 &lt;x \\le 5 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} -1 \\, , \\, -4 \\le x \\le -1 \\\\ x+1 \\, , \\, -1 &lt;x \\le 2 \\\\ -2 \\, , \\, 2 &lt;x \\le 5 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} 1 \\, , \\, -4 &lt;x &lt;-1 \\\\ -x+1 \\, , \\, -1 \\le x &lt;2 \\\\ -2 \\, , \\, x &lt;2 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} 1 \\, , \\, -4 &lt;x &lt;-1 \\\\ x+1 \\, , \\, -1 &lt;x \\le 2 \\\\ 2 \\, , \\, 2 &lt;x \\le 5 \\end{cases}\\)'
    }
  },
  {
    id: 22,
    text: 'قاعدة الاقتران المتشعب للشكل الآتي الممثل بيانياً:',
    image: 'assets/exam-2010-l1/q22.png',
    choices: {
      a: '\\(f(x)=\\begin{cases} x \\, , \\, x \\le 0 \\\\ \\frac{1}{3}x+2 \\, , \\, x &gt;0 \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} x \\, , \\, x \\le 0 \\\\ 3x+1 \\, , \\, x &gt;0 \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} x \\, , \\, x \\ge 2 \\\\ \\frac{1}{3}x+2 \\, , \\, x &lt;2 \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} x \\, , \\, x &lt;0 \\\\ 3x+1 \\, , \\, x \\ge 0 \\end{cases}\\)'
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
    text: 'إذا كان: \\(f(x)=\\begin{cases} kx \\, , \\, x &lt;0 \\\\ 3-2x \\, , \\, x \\ge 0 \\end{cases}\\)، فإنّ قيمة الثابت \\(k\\) التي تجعل \\(f(0)=f(-1)\\) هي؟',
    choices: { a: '\\(-3\\)', b: '\\(3\\)', c: '\\(-1\\)', d: '\\(1\\)' }
  },
  {
    id: 25,
    text: 'إذا كان \\(f(x)=|7x-5|+3\\) فإنّ أي الاقترانات الآتية يُمثّل إعادة التعريف الصحيحة للاقتران \\(f(x)\\):',
    choices: {
      a: '\\(f(x)=\\begin{cases} 7x-2 \\, , \\, x \\ge \\frac{7}{5} \\\\ -7+8 \\, , \\, x &lt;\\frac{7}{5} \\end{cases}\\)',
      b: '\\(f(x)=\\begin{cases} 7x+2 \\, , \\, x \\ge \\frac{5}{7} \\\\ 7x+8 \\, , \\, x &lt;\\frac{5}{7} \\end{cases}\\)',
      c: '\\(f(x)=\\begin{cases} 7x-2 \\, , \\, x \\ge \\frac{5}{7} \\\\ -7x+8 \\, , \\, x &lt;\\frac{5}{7} \\end{cases}\\)',
      d: '\\(f(x)=\\begin{cases} 7x-2 \\, , \\, x \\ge 3 \\\\ -7x+8 \\, , \\, x &lt;3 \\end{cases}\\)'
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

/* =========================================================================
   بنك أسئلة اختبار الدرس الثاني: العمليات على المصفوفات
   رياضيات الأعمال — جيل 2009
   -------------------------------------------------------------------------
   Transcribed exactly from the teacher's PDF (ورقة عمل — الدرس الثاني).
   19 questions. Answer key taken from the answer table at the end of THIS
   lesson only, and independently cross-checked against the highlighted
   choice on every question in the PDF — all 19 agree.
   ========================================================================= */
const EXAM_QUESTIONS_BM_L2 = [
  {
    id: 1,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\) ، \\(B = \\begin{bmatrix} 5 & 0 \\\\ -6 & 8 \\end{bmatrix}\\) ، فإن ناتج \\(3A + B\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 8 & 3 \\\\ 15 & 20 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 8 & 6 \\\\ 3 & 20 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 8 & 6 \\\\ 15 & 8 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 8 & 3 \\\\ 6 & 20 \\end{bmatrix}\\)'
    }
  },
  {
    id: 2,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 2 & 4 & 6 \\\\ -1 & -5 & 4 \\end{bmatrix}\\) ، \\(B = \\begin{bmatrix} 5 & -2 \\\\ 3 & 0 \\\\ -7 & 6 \\end{bmatrix}\\) ، فإن ناتج \\(A + B\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 7 & 2 & 9 \\\\ -1 & -12 & 10 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 7 & 2 \\\\ 9 & -1 \\\\ -12 & 10 \\end{bmatrix}\\)',
      c: 'لا يمكن جمعهما؛ لأنَّهما من رتبتين مختلفتين',
      d: 'لا يمكن جمعهما؛ لأنَّهما من رتبتين متشابهتين'
    }
  },
  {
    id: 3,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 15 & -21 \\\\ 9 & 5 \\end{bmatrix}\\) ، فإن ناتج \\(\\frac{2}{3}A\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} -14 & 10 \\\\ \\frac{10}{3} & 6 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 10 & -14 \\\\ 6 & \\frac{10}{3} \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 22.5 & -18 \\\\ 13.5 & 7.5 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -18 & 22.5 \\\\ 7.5 & 13.5 \\end{bmatrix}\\)'
    }
  },
  {
    id: 4,
    text: 'إذا كان: \\(D = \\begin{bmatrix} 0 & 4 & -3 \\\\ 7 & -2 & 1 \\\\ 8 & 10 & 6 \\end{bmatrix}\\) ، فإن ناتج \\(1.5D\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 1.5 & 5.5 & -1.5 \\\\ 8.5 & -0.5 & 2.5 \\\\ 9.5 & 11.5 & 7.5 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 1.5 & -2.5 & 4.5 \\\\ -5.5 & 3.5 & 0.5 \\\\ -6.5 & -8.5 & -4.5 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 0 & 6 & -4.5 \\\\ 10.5 & -3 & 1.5 \\\\ 12 & 15 & 9 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 0 & 4 & -3 \\\\ 7 & -2 & 1 \\\\ 8 & 10 & 6 \\end{bmatrix}\\)'
    }
  },
  {
    id: 5,
    text: 'إذا كان: \\(G = \\begin{bmatrix} 3 & 0 & 7 \\end{bmatrix}\\) ، \\(H = \\begin{bmatrix} 6 & -4 & 9 \\end{bmatrix}\\) ، فإن ناتج: \\(5(G + H)\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 9 & -4 & 16 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 15 & 5 & 35 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 30 & -20 & 45 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 45 & -20 & 80 \\end{bmatrix}\\)'
    }
  },
  {
    id: 6,
    text: 'جد ناتج ما يلي: \\(\\begin{bmatrix} 9 \\\\ 5 \\\\ 8 \\end{bmatrix} - \\begin{bmatrix} -2 \\\\ 6 \\\\ 4 \\end{bmatrix}\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 11 \\\\ -1 \\\\ 4 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 11 \\\\ 11 \\\\ 12 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} -11 \\\\ 1 \\\\ -4 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -18 \\\\ 30 \\\\ 32 \\end{bmatrix}\\)'
    }
  },
  {
    id: 7,
    text: 'جد ناتج ما يلي: \\(2\\begin{bmatrix} 1 & -5 \\\\ 2 & 9 \\end{bmatrix} + 3\\begin{bmatrix} 4 & 2 \\\\ 3 & -5 \\end{bmatrix}\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 5 & -3 \\\\ 5 & 4 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 14 & -4 \\\\ 13 & 3 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 12 & 6 \\\\ 9 & -15 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 2 & -10 \\\\ 4 & 18 \\end{bmatrix}\\)'
    }
  },
  {
    id: 8,
    text: 'جد ناتج ما يلي: \\(-4\\left( \\begin{bmatrix} 0 & 1 & 6 \\\\ -2 & 7 & 4 \\\\ 6 & 3 & 5 \\end{bmatrix} - \\begin{bmatrix} 9 & 6 & 10 \\\\ 5 & -4 & 1 \\\\ 8 & -1 & 7 \\end{bmatrix} \\right)\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 36 & 26 & 16 \\\\ 28 & -44 & -12 \\\\ -40 & 16 & -48 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} -9 & -5 & -4 \\\\ -7 & 11 & 3 \\\\ -2 & 4 & -2 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 36 & 20 & 16 \\\\ 28 & -44 & -12 \\\\ 8 & -16 & 8 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -9 & -10 & -34 \\\\ -13 & -24 & -15 \\\\ -16 & -13 & -27 \\end{bmatrix}\\)'
    }
  },
  {
    id: 9,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 4 & -2 \\\\ -3 & 10 \\end{bmatrix}\\) ، \\(B = \\begin{bmatrix} 4 & -1 & -5 \\\\ 3 & 2 & 8 \\end{bmatrix}\\) ، فإن ناتج \\(B + 1.5B\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 6 & -1.5 & -7.5 \\\\ 4.5 & 3 & 12 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 10 & -2.5 & -12.5 \\\\ 7.5 & 5 & 20 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 10 & -3.5 & -10.5 \\\\ 14.5 & 3 & 12 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 10 & -2.5 & -12.5 \\\\ 2.5 & 5 & 22 \\end{bmatrix}\\)'
    }
  },
  {
    id: 10,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 4 & -2 \\\\ -3 & 10 \\end{bmatrix}\\) ، \\(C = \\begin{bmatrix} 3 & 2 \\\\ 0 & -9 \\end{bmatrix}\\) ، فإن ناتج \\(2C - 3A\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 6 & 4 \\\\ 0 & -18 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 12 & -6 \\\\ -9 & 30 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} -12 & 6 \\\\ 9 & -30 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -6 & 10 \\\\ 9 & -48 \\end{bmatrix}\\)'
    }
  },
  {
    id: 11,
    text: 'جد قيمة كل من \\(x, y\\) التي تحقق المعادلة الآتية: \\(2\\begin{bmatrix} x & 3 \\\\ 6 & y \\end{bmatrix} = 3\\begin{bmatrix} x & 6 \\\\ 4 & -2 \\end{bmatrix} - 4\\begin{bmatrix} 4 & 3 \\\\ 0 & x \\end{bmatrix}\\)',
    choices: {
      a: '\\(x = -35,\\ y = 16\\)',
      b: '\\(x = -16,\\ y = 35\\)',
      c: '\\(x = 16,\\ y = -35\\)',
      d: '\\(x = -35,\\ y = -16\\)'
    }
  },
  {
    id: 12,
    text: 'اكتب مصفوفتين \\(A, B\\) بحيث يكون: \\(3A + 2B = \\begin{bmatrix} 12 & 8 \\\\ 6 & -5 \\end{bmatrix}\\)',
    choices: {
      a: '\\(A = \\begin{bmatrix} 4 & 2 \\\\ 1 & -4 \\end{bmatrix}, B = \\begin{bmatrix} 0 & 1 \\\\ 1.5 & 3.5 \\end{bmatrix}\\)',
      b: '\\(A = \\begin{bmatrix} 2 & -2 \\\\ 1 & -4 \\end{bmatrix}, B = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}\\)',
      c: '\\(A = \\begin{bmatrix} 4 & -4 \\\\ 1 & 2 \\end{bmatrix}, B = \\begin{bmatrix} 0 & 1 \\\\ 3.5 & 1.5 \\end{bmatrix}\\)',
      d: '\\(A = \\begin{bmatrix} 2 & 2 \\\\ 1 & 4 \\end{bmatrix}, B = \\begin{bmatrix} 3 & 1 \\\\ 1.5 & 3.5 \\end{bmatrix}\\)'
    }
  },
  {
    id: 13,
    text: 'إذا كانت المعادلة \\(2X - 3 = \\begin{bmatrix} 7 \\\\ -5 \\end{bmatrix}\\) ، فإن المصفوفة \\(X\\) التي تحقق المعادلة هي:',
    choices: {
      a: '\\(\\begin{bmatrix} \\frac{5}{2} \\\\ -\\frac{1}{2} \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 5 \\\\ -1 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} -5 \\\\ 1 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix}\\)'
    }
  },
  {
    id: 14,
    text: 'إذا كانت \\(3\\begin{bmatrix} 2 & -1 \\\\ 4 & 5 \\end{bmatrix} - 2B = \\begin{bmatrix} 3 & 5 \\\\ -2 & 1 \\end{bmatrix}\\) ، فجد المصفوفة \\(B\\):',
    choices: {
      a: '\\(\\begin{bmatrix} 1.5 & -4 \\\\ 7 & 7 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 1.5 & -4 \\\\ 7 & -7 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 4 & 1.5 \\\\ -7 & 7 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -1.5 & -4 \\\\ 7 & 7 \\end{bmatrix}\\)'
    }
  },
  {
    id: 15,
    text: 'إذا كانت: \\(\\begin{bmatrix} x & y \\\\ -y & x \\end{bmatrix} - \\begin{bmatrix} y & x \\\\ x & -y \\end{bmatrix} = \\begin{bmatrix} 4 & -4 \\\\ -6 & 6 \\end{bmatrix}\\) ، فجد قيمة كل من \\(x\\) و \\(y\\):',
    choices: {
      a: '\\(x = 5,\\ y = -1\\)',
      b: '\\(x = 5,\\ y = 1\\)',
      c: '\\(x = -1,\\ y = 5\\)',
      d: '\\(x = 1,\\ y = -5\\)'
    }
  },
  {
    id: 16,
    text: 'إذا كانت \\(\\begin{bmatrix} b & 11 \\\\ -4 & 12 \\end{bmatrix} + \\begin{bmatrix} 3 & a \\\\ -2 & -8 \\end{bmatrix} = \\begin{bmatrix} 9 & 3b \\\\ -6 & 4 \\end{bmatrix}\\) ، فإن قيمة \\(a, b\\):',
    choices: {
      a: '\\(a = 6,\\ b = 7\\)',
      b: '\\(a = 7,\\ b = -6\\)',
      c: '\\(a = -6,\\ b = -7\\)',
      d: '\\(a = 7,\\ b = 6\\)'
    }
  },
  {
    id: 17,
    text: 'إذا كانت \\(A_{3 \\times 2}\\) ، وكانت \\(B_{2 \\times 4}\\) ، وكانت \\(C_{3 \\times 2}\\) فإن العملية التي يمكن إيجادها هي:',
    choices: {
      a: '\\(A + C\\)', b: '\\(A + B\\)', c: '\\(B - C\\)', d: '\\(B - A\\)'
    }
  },
  {
    id: 18,
    text: 'إذا كانت: \\(\\begin{bmatrix} 4 & x \\\\ 7 & 3 \\end{bmatrix} = \\begin{bmatrix} 2x - y & 2 \\\\ 4 & z \\end{bmatrix} + 3\\begin{bmatrix} 1 & 1 \\\\ 1 & x - z \\end{bmatrix}\\) ، فإن قيمة \\((x + y + z)\\) تساوي:',
    choices: { a: '\\(10\\)', b: '\\(19\\)', c: '\\(21\\)', d: '\\(26\\)' }
  },
  {
    id: 19,
    text: 'إذا كانت \\(\\begin{bmatrix} -20 & -19 \\\\ 64 & 5 \\end{bmatrix} = 2\\begin{bmatrix} y & x \\\\ 12 & 5 \\end{bmatrix} - 5\\begin{bmatrix} 4 & 7 \\\\ -8 & 1 \\end{bmatrix}\\) ، فإن قيمة \\((y - x)\\) تساوي:',
    choices: { a: '\\(-8\\)', b: '\\(8\\)', c: '\\(16\\)', d: '\\(-16\\)' }
  }
];

// Answer key from the answer table at the end of الدرس الثاني in the PDF.
const EXAM_ANSWER_KEY_BM_L2 = {
  1: 'b', 2: 'c', 3: 'b', 4: 'c', 5: 'd', 6: 'a', 7: 'b', 8: 'c', 9: 'b', 10: 'd',
  11: 'c', 12: 'a', 13: 'b', 14: 'a', 15: 'b', 16: 'd', 17: 'a', 18: 'd', 19: 'a'
};

/* =========================================================================
   بنك أسئلة اختبار الدرس الثالث: ضرب المصفوفات
   رياضيات الأعمال — جيل 2009
   -------------------------------------------------------------------------
   Transcribed exactly from the teacher's PDF (ورقة عمل — الدرس الثالث).
   NOTE ON NUMBERING: the PDF prints the number "6" twice (on two different
   questions) and skips "7". The lesson's answer table has 21 entries, and
   the second "6" lines up with key position 7 (its highlighted answer d
   matches key #7 = d). Questions are therefore numbered 1..21 here so the
   count and the answer table agree; no question was added, removed, or
   reordered.
   ========================================================================= */
const EXAM_QUESTIONS_BM_L3 = [
  {
    id: 1,
    text: 'إذا كانت: \\(A_{3 \\times 2}\\)، وكانت \\(B_{2 \\times 4}\\)، وكانت \\(C_{3 \\times 2}\\)، فإنَّ العملية التي يُمكِن إيجادها هي:',
    choices: {
      a: '\\(A + B\\)', b: '\\(B + C\\)', c: '\\(5B - 3C\\)', d: '\\((A + C)B\\)'
    }
  },
  {
    id: 2,
    text: 'إذا كانت: \\(C = \\begin{bmatrix} -2 & 4 \\\\ 6 & -3 \\\\ 8 & 5 \\end{bmatrix} \\times \\begin{bmatrix} 1 & 4 & 5 \\\\ 9 & -2 & -3 \\end{bmatrix}\\) ، فإنَّ قيمة العنصر \\(C_{23}\\) تساوي:',
    choices: { a: '\\(39\\)', b: '\\(22\\)', c: '\\(25\\)', d: '\\(27\\)' }
  },
  {
    id: 3,
    text: 'إذا كانت \\(L_{3 \\times 4}\\)، وكانت \\(M_{5 \\times 3}\\)، وكانت \\(N_{2 \\times 5}\\)، فإنَّ رتبة المصفوفة \\(T\\)، حيث: \\(T = NML\\)، هي:',
    choices: { a: '\\(2 \\times 3\\)', b: '\\(3 \\times 5\\)', c: '\\(3 \\times 4\\)', d: '\\(2 \\times 4\\)' }
  },
  {
    id: 4,
    text: 'إذا كانت \\(A_{2 \\times 3}\\) ، وكانت \\(B_{2 \\times 2}\\) ، وكانت \\(C_{3 \\times 2}\\) ، فإن رتبة المصفوفة \\(D\\) ، حيث \\(D = ACB\\) هي:',
    choices: { a: '\\(2 \\times 3\\)', b: '\\(2 \\times 2\\)', c: '\\(3 \\times 2\\)', d: '\\(3 \\times 3\\)' }
  },
  {
    id: 5,
    text: 'إذا كانت \\(L_{3 \\times 4}\\) ، وكانت \\(C_{4 \\times 5}\\) ، فإن رتبة المصفوفة \\(B\\) حيث \\(B = LC\\) هي:',
    choices: { a: '\\(3 \\times 4\\)', b: '\\(3 \\times 3\\)', c: '\\(3 \\times 5\\)', d: '\\(5 \\times 3\\)' }
  },
  {
    id: 6,
    text: 'إذا كان: \\(M = \\begin{bmatrix} 3 & -1 \\\\ 2 & 5 \\end{bmatrix}\\) ، وكان: \\(N = \\begin{bmatrix} 4 & 0 \\\\ 6 & -3 \\end{bmatrix}\\) ، فجد \\(MN\\):',
    choices: {
      a: '\\(\\begin{bmatrix} 6 & 3 \\\\ 38 & -15 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 6 & 3 \\\\ -38 & 15 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 3 & 6 \\\\ -15 & 38 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 3 & -6 \\\\ 15 & 38 \\end{bmatrix}\\)'
    }
  },
  {
    id: 7,
    text: 'إذا كان: \\(M = \\begin{bmatrix} 5 & 4 \\\\ 6 & 3 \\\\ 4 & 5 \\end{bmatrix}, N = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}\\) ، فجد \\(MN\\):',
    choices: {
      a: '\\(\\begin{bmatrix} 20 \\\\ 21 \\\\ 17 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 19 \\\\ 17 \\\\ 21 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 21 \\\\ 19 \\\\ 17 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 19 \\\\ 21 \\\\ 17 \\end{bmatrix}\\)'
    }
  },
  {
    id: 8,
    text: 'إذا كانت رتبة المصفوفة \\(A\\) هي: \\(2 \\times 3\\) ، ورتبة المصفوفة \\(B\\) هي: \\(3 \\times 4\\) ، وكانت: \\(C = B \\times A\\) ، فإن رتبة المصفوفة \\(C\\) هي:',
    choices: { a: '\\(2 \\times 4\\)', b: '\\(2 \\times 3\\)', c: '\\(4 \\times 2\\)', d: '\\(3 \\times 3\\)' }
  },
  {
    id: 9,
    text: 'ناتج \\(\\left( \\begin{bmatrix} 0 & 1 \\\\ 2 & 0 \\end{bmatrix} \\right)^2\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 0 & 1 \\\\ 4 & 0 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 0 & 2 \\\\ 1 & 0 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 0 & 1 \\\\ 2 & 0 \\end{bmatrix}\\)'
    }
  },
  {
    id: 10,
    text: 'إذا كان: \\(P = \\begin{bmatrix} 2 & 0 \\\\ 1 & -1 \\end{bmatrix}\\) ، \\(Q = \\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix}\\) ، \\(R = \\begin{bmatrix} 0 & -2 \\\\ 4 & 1 \\end{bmatrix}\\) وكان: \\(K = 3\\) ، فأجب عن الفقرات \\(\\{10, 11, 12\\}\\): &nbsp; \\(P(Q + R)\\)',
    choices: {
      a: '\\(\\begin{bmatrix} 4 & 4 \\\\ -2 & -1 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 6 & 4 \\\\ -2 & 1 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 6 & 4 \\\\ 2 & 1 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 6 & 4 \\\\ -2 & -1 \\end{bmatrix}\\)'
    }
  },
  {
    id: 11,
    text: '\\(K(PQ)\\):',
    choices: {
      a: '\\(\\begin{bmatrix} 18 & 24 \\\\ 6 & 6 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 18 & 42 \\\\ 6 & 6 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 18 & 24 \\\\ -6 & 6 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -18 & 24 \\\\ 6 & -6 \\end{bmatrix}\\)'
    }
  },
  {
    id: 12,
    text: '\\((PQ)R\\)',
    choices: {
      a: '\\(\\begin{bmatrix} 32 & 4 \\\\ 8 & -2 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 32 & 4 \\\\ -8 & -4 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 32 & -4 \\\\ 8 & -2 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -4 & 32 \\\\ 8 & -2 \\end{bmatrix}\\)'
    }
  },
  {
    id: 13,
    text: 'ناتج: \\(\\begin{bmatrix} 2 \\\\ 5 \\end{bmatrix} \\times \\begin{bmatrix} -1 & 4 \\end{bmatrix}\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} -2 & -8 \\\\ -5 & 20 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} -2 & 8 \\\\ -5 & 20 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 8 & -2 \\\\ 20 & 5 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -2 & 8 \\\\ 5 & 20 \\end{bmatrix}\\)'
    }
  },
  {
    id: 14,
    text: 'ناتج: \\(\\begin{bmatrix} 8 & 10 & -7 \\end{bmatrix} \\times \\begin{bmatrix} 1 \\\\ -3 \\\\ -5 \\end{bmatrix}\\) هو:',
    choices: {
      a: '\\(\\begin{bmatrix} 13 & 0 & 1 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 13 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 13 \\\\ 0 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -13 \\end{bmatrix}\\)'
    }
  },
  {
    id: 15,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 2 & 0 \\\\ x & 3 \\end{bmatrix}\\) ، \\(B = \\begin{bmatrix} -2 & 0 \\\\ y & 4 \\end{bmatrix}\\) ، فإن \\(AB\\) بدلالة \\(x, y\\) هي:',
    choices: {
      a: '\\(\\begin{bmatrix} 4 & 0 \\\\ -2x + 3y & 12 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} -4 & 0 \\\\ 2x + 3y & 12 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} -4 & 0 \\\\ 2y + 4x & 12 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} -4 & 0 \\\\ -2x + 3y & 12 \\end{bmatrix}\\)'
    }
  },
  {
    id: 16,
    text: 'إذا علمت أن: \\(AB = \\begin{bmatrix} -4 & 0 \\\\ -2x + 3y & 12 \\end{bmatrix}\\) ، وكان: \\(BA = \\begin{bmatrix} -4 & 0 \\\\ 2y + 4x & 12 \\end{bmatrix}\\) ، فإن أصغر قيمة صحيحة موجبة لكل من \\(x, y\\) هي:',
    choices: {
      a: '\\(x = 6,\\ y = 1\\)', b: '\\(x = 2,\\ y = 6\\)',
      c: '\\(x = 1,\\ y = 6\\)', d: '\\(x = 3,\\ y = 6\\)'
    }
  },
  {
    id: 17,
    text: 'إذا كانت \\(A = \\begin{bmatrix} 12 & 4 \\\\ 9 & 3 \\end{bmatrix}\\) ، \\(B = \\begin{bmatrix} 4 & 6 \\\\ 0 & 1 \\end{bmatrix}\\) ، \\(C = \\begin{bmatrix} 5 & 8 \\\\ -3 & -5 \\end{bmatrix}\\) ، فإن أيّاً من العلاقات الآتية صحيحة:',
    choices: {
      a: '\\(AB = AC\\)', b: '\\(BA = CA\\)', c: '\\(AC = CB\\)', d: '\\(AB = BC\\)'
    }
  },
  {
    id: 18,
    text: 'إذا كانت \\(B = \\begin{bmatrix} 1 & 0 \\\\ \\sqrt{3} & -1 \\end{bmatrix}\\) فإن \\(B^2\\) تساوي:',
    choices: {
      a: '\\(\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 0 & -1 \\\\ 0 & 0 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}\\)'
    }
  },
  {
    id: 19,
    text: 'إذا كانت \\(B = \\begin{bmatrix} 0 & 0 \\\\ \\sqrt{3} & -1 \\end{bmatrix}\\) ، فإن \\(B^3\\) تساوي:',
    choices: {
      a: '\\(\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} 1 & 0 \\\\ \\sqrt{3} & 1 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} 1 & 1 \\\\ \\sqrt{3} & -1 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 1 & 0 \\\\ \\sqrt{3} & -1 \\end{bmatrix}\\)'
    }
  },
  {
    id: 20,
    text: 'إذا كانت \\(\\begin{bmatrix} 1 & 3 \\\\ x & 2 \\end{bmatrix} \\times \\begin{bmatrix} y & -1 \\\\ 3 & -2 \\end{bmatrix} = \\begin{bmatrix} 7 & -7 \\\\ 8 & -3 \\end{bmatrix}\\) فإن قيمة كل من \\(x\\) و \\(y\\) هي:',
    choices: {
      a: '\\(x = 1, y = -2\\)', b: '\\(x = -1, y = -2\\)',
      c: '\\(x = 1, y = 2\\)', d: '\\(x = -1, y = 2\\)'
    }
  },
  {
    id: 21,
    text: 'إذا كانت \\(B = \\begin{bmatrix} 5 & 3 & -2 \\\\ -4 & 1 & 7 \\end{bmatrix}\\) ، \\(D = \\begin{bmatrix} -3 \\\\ 0 \\\\ -1 \\end{bmatrix}\\) ، فإن \\(BD\\) تساوي:',
    choices: {
      a: '\\(\\begin{bmatrix} 13 \\\\ -5 \\end{bmatrix}\\)',
      b: '\\(\\begin{bmatrix} -5 \\\\ 13 \\end{bmatrix}\\)',
      c: '\\(\\begin{bmatrix} -13 \\\\ 5 \\end{bmatrix}\\)',
      d: '\\(\\begin{bmatrix} 13 \\\\ 5 \\end{bmatrix}\\)'
    }
  }
];

// Answer key from the answer table at the end of الدرس الثالث in the PDF.
const EXAM_ANSWER_KEY_BM_L3 = {
  1: 'd', 2: 'b', 3: 'd', 4: 'b', 5: 'c', 6: 'a', 7: 'd', 8: 'c', 9: 'a', 10: 'd',
  11: 'a', 12: 'c', 13: 'b', 14: 'b', 15: 'd', 16: 'c', 17: 'a', 18: 'c', 19: 'd',
  20: 'd', 21: 'd'
};

/* =========================================================================
   بنك أسئلة اختبار الدرس الرابع: المُحددات وقاعدة كريمر
   رياضيات الأعمال — جيل 2009
   -------------------------------------------------------------------------
   Transcribed exactly from the teacher's PDF (ورقة عمل — الدرس الرابع).
   13 questions. Same duplicate-"6" numbering quirk as الدرس الثالث: the PDF
   prints "6" on two questions and skips "7"; the answer table has 13
   entries and the second "6" lines up with key position 7 (highlighted
   answer c matches key #7 = c). Numbered 1..13 here to match the table.
   Questions 6 and 7 carry the two original coordinate-plane figures,
   cropped directly from the PDF (assets/exam-bm-l4/).
   ========================================================================= */
const EXAM_QUESTIONS_BM_L4 = [
  {
    id: 1,
    text: 'إذا كان: \\(\\begin{vmatrix} 0 & -3 \\\\ 1 & 4 \\end{vmatrix}\\) ، فجد قيمة المحددة الآتية:',
    choices: { a: '\\(28\\)', b: '\\(38\\)', c: '\\(-28\\)', d: '\\(-38\\)' }
  },
  {
    id: 2,
    text: 'إذا كان: \\(\\begin{vmatrix} -4 & 3 & 6 \\\\ 6 & 5 & 1 \\\\ 1 & 6 & 3 \\end{vmatrix}\\) ، فجد قيمة المحددة الآتية:',
    choices: { a: '\\(201\\)', b: '\\(-99\\)', c: '\\(-201\\)', d: '\\(99\\)' }
  },
  {
    id: 3,
    text: 'إذا كان: \\(A = \\begin{bmatrix} a - 3 & -2 \\\\ 2 & a + 2 \\end{bmatrix}\\) ، حيث \\(a\\) عدد ثابت ، فجد محددة \\(A\\) بدلالة \\(a\\):',
    choices: {
      a: '\\(a^2 - 2\\)', b: '\\(a^2 - a - 2\\)',
      c: '\\(a^2 + 2a + 2\\)', d: '\\(a^2 + 2a - 2\\)'
    }
  },
  {
    id: 4,
    text: 'إذا كان: \\(A = \\begin{bmatrix} a - 3 & -2 \\\\ 2 & a + 2 \\end{bmatrix}\\) ، حيث \\(a\\) عدد ثابت ، فجد قيم \\(a\\) التي تجعل \\(|A| = 0\\):',
    choices: { a: '\\(-2, -1\\)', b: '\\(1, -2\\)', c: '\\(2, -1\\)', d: '\\(2, 1\\)' }
  },
  {
    id: 5,
    text: 'المقدار الذي قيمته تساوي مساحة المثلث الذي رؤوسه \\(A(3, 5)\\) ، \\(B(0, 1)\\) ، \\(C(7, 0)\\) مما يأتي هو:',
    choices: {
      a: '\\(\\frac{1}{2}\\begin{vmatrix} 7 & 0 & 1 \\\\ 3 & 5 & 1 \\\\ 0 & 1 & 1 \\end{vmatrix}\\)',
      b: '\\(\\frac{1}{2}\\begin{vmatrix} 7 & 5 & 1 \\\\ 0 & 0 & 1 \\\\ 3 & 1 & 1 \\end{vmatrix}\\)',
      c: '\\(\\frac{1}{2}\\begin{vmatrix} 3 & 0 & 1 \\\\ 7 & 5 & 1 \\\\ 0 & 1 & 1 \\end{vmatrix}\\)',
      d: '\\(\\frac{1}{2}\\begin{vmatrix} 7 & 1 & 1 \\\\ 0 & 5 & 1 \\\\ 3 & 0 & 1 \\end{vmatrix}\\)'
    }
  },
  {
    id: 6,
    text: 'يظهر في المستوى الإحداثي المجاور مخطط لجزيرة على شكل مثلث. إذا كانت كل وحدة في المستوى الإحداثي تمثل \\(1Km\\) ، فأجد مساحة الجزيرة.',
    image: 'assets/exam-bm-l4/q6-island.png',
    choices: { a: '\\(162\\)', b: '\\(126\\)', c: '\\(166\\)', d: '\\(122\\)' }
  },
  {
    id: 7,
    text: 'يظهر في المستوى الإحداثي المجاور إحداثيات كلّ من مدينة الزرقاء، ومدينة الرمثا، ومدينة المفرق. إذا كانت كل وحدة في المستوى الإحداثي تُمَثّل \\(10Km\\) ، فأجد مساحة المنطقة التي رؤوسها هذه المدن الثلاث.',
    image: 'assets/exam-bm-l4/q7-cities.png',
    choices: { a: '\\(505\\)', b: '\\(605\\)', c: '\\(550\\)', d: '\\(500\\)' }
  },
  {
    id: 8,
    text: 'إذا كان \\(\\begin{cases} 2x - y = 4 \\\\ 3x + 2y = 0 \\end{cases}\\) نظاماً من المعادلات الخطية بمتغيرين، وكان \\(D = \\begin{vmatrix} 2 & -1 \\\\ 3 & 2 \\end{vmatrix}\\) ، فإن قيمة \\(x\\) باستعمال قاعدة كريمر هي:',
    choices: {
      a: '\\(x = \\frac{\\begin{vmatrix} 2 & -1 \\\\ 3 & 2 \\end{vmatrix}}{D}\\)',
      b: '\\(x = \\frac{\\begin{vmatrix} 2 & 4 \\\\ 3 & 0 \\end{vmatrix}}{D}\\)',
      c: '\\(x = \\frac{\\begin{vmatrix} -1 & 4 \\\\ 2 & 0 \\end{vmatrix}}{D}\\)',
      d: '\\(x = \\frac{\\begin{vmatrix} 4 & -1 \\\\ 0 & 2 \\end{vmatrix}}{D}\\)'
    }
  },
  {
    id: 9,
    text: 'إحدى المصفوفات الآتية هي مصفوفة مربعة من الرتبة \\(2 \\times 2\\) بشرط محددتها تساوي صفراً:',
    choices: {
      a: '\\(A = \\begin{bmatrix} 6 & 12 \\\\ 2 & -4 \\end{bmatrix}\\)',
      b: '\\(A = \\begin{bmatrix} 6 & 12 \\\\ 2 & 4 \\end{bmatrix}\\)',
      c: '\\(A = \\begin{bmatrix} 6 & 12 \\\\ -2 & 4 \\end{bmatrix}\\)',
      d: '\\(A = \\begin{bmatrix} -6 & 12 \\\\ 2 & 4 \\end{bmatrix}\\)'
    }
  },
  {
    id: 10,
    text: 'إحدى المصفوفات الآتية هي مصفوفة مربعة من الرتبة \\(2 \\times 2\\) بشرط محددتها تساوي \\((-1)\\):',
    choices: {
      a: '\\(A = \\begin{bmatrix} 7 & 5 \\\\ 4 & 3 \\end{bmatrix}\\)',
      b: '\\(A = \\begin{bmatrix} 7 & 5 \\\\ 4 & -3 \\end{bmatrix}\\)',
      c: '\\(A = \\begin{bmatrix} 5 & 3 \\\\ 7 & 4 \\end{bmatrix}\\)',
      d: '\\(A = \\begin{bmatrix} 7 & -5 \\\\ 4 & 3 \\end{bmatrix}\\)'
    }
  },
  {
    id: 11,
    text: 'إحدى المصفوفات الآتية هي مصفوفة مربعة من الرتبة \\(2 \\times 2\\) بشرط جميع عناصرها أعداد موجبة ومحددتها تساوي \\((-12)\\):',
    choices: {
      a: '\\(A = \\begin{bmatrix} 2 & 3 \\\\ 8 & 6 \\end{bmatrix}\\)',
      b: '\\(A = \\begin{bmatrix} 3 & 2 \\\\ 6 & 8 \\end{bmatrix}\\)',
      c: '\\(A = \\begin{bmatrix} -2 & 3 \\\\ 8 & 6 \\end{bmatrix}\\)',
      d: '\\(A = \\begin{bmatrix} 2 & -3 \\\\ 6 & 8 \\end{bmatrix}\\)'
    }
  },
  {
    id: 12,
    text: 'عند حلّ نظام من معادلتين بمُتغيّرين باستعمال قاعدة كريمر، فإنَّ الحلَّ هو: \\(x = \\frac{\\begin{vmatrix} 1 & 2 \\\\ 3 & 4 \\end{vmatrix}}{5}, y = \\frac{\\begin{vmatrix} 7 & a \\\\ b & c \\end{vmatrix}}{5}\\) ، ما قيمة كلٍّ من \\(a\\)، و\\(c\\)؟',
    choices: {
      a: '\\(a = 3, c = 1\\)', b: '\\(a = 1, c = 3\\)',
      c: '\\(a = -1, c = 3\\)', d: '\\(a = 1, c = -3\\)'
    }
  },
  {
    id: 13,
    text: 'عند حلّ نظام من معادلتين بمُتغيّرين باستعمال قاعدة كريمر، فإنَّ الحلَّ هو: \\(x = \\frac{\\begin{vmatrix} 1 & 2 \\\\ 3 & 4 \\end{vmatrix}}{5}, y = \\frac{\\begin{vmatrix} 7 & a \\\\ b & c \\end{vmatrix}}{5}\\) ، ما قيمة \\(b\\)؟',
    choices: {
      a: '\\(\\frac{21}{2}\\)', b: '\\(-\\frac{23}{2}\\)',
      c: '\\(-\\frac{21}{2}\\)', d: '\\(\\frac{23}{2}\\)'
    }
  }
];

// Answer key from the answer table at the end of الدرس الرابع in the PDF.
const EXAM_ANSWER_KEY_BM_L4 = {
  1: 'a', 2: 'd', 3: 'b', 4: 'c', 5: 'a', 6: 'a', 7: 'c', 8: 'd', 9: 'b', 10: 'c',
  11: 'a', 12: 'b', 13: 'd'
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

  'fin-culture-l2': {
    subject: 'الثقافة المالية',
    unit: 'الوحدة (1) الدورة المحاسبية في المؤسسات الخدمية',
    examName: 'الدرس (2): نظرية القيد المزدوج والعمليات المالية',
    questions: EXAM_QUESTIONS_FIN_CULTURE_L2,
    answerKey: EXAM_ANSWER_KEY_FIN_CULTURE_L2,
    labels: { a: 'أ', b: 'ب', c: 'ج', d: 'د' },
    // Single exam, no model split — 19 questions from the two source
    // images combined into one continuous set.
    models: {
      'النموذج الأول': { from: 1, to: 19 }
    }
  },

  'bm-l2': {
    subject: 'رياضيات الأعمال',
    unit: 'الوحدة (1) المصفوفات',
    examName: 'الدرس (2): العمليات على المصفوفات',
    questions: EXAM_QUESTIONS_BM_L2,
    answerKey: EXAM_ANSWER_KEY_BM_L2,
    models: {
      'النموذج الأول': { from: 1, to: 19 }
    }
  },

  'bm-l3': {
    subject: 'رياضيات الأعمال',
    unit: 'الوحدة (1) المصفوفات',
    examName: 'الدرس (3): ضرب المصفوفات',
    questions: EXAM_QUESTIONS_BM_L3,
    answerKey: EXAM_ANSWER_KEY_BM_L3,
    models: {
      'النموذج الأول': { from: 1, to: 21 }
    }
  },

  'bm-l4': {
    subject: 'رياضيات الأعمال',
    unit: 'الوحدة (1) المصفوفات',
    examName: 'الدرس (4): المُحددات وقاعدة كريمر',
    questions: EXAM_QUESTIONS_BM_L4,
    answerKey: EXAM_ANSWER_KEY_BM_L4,
    models: {
      'النموذج الأول': { from: 1, to: 13 }
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
