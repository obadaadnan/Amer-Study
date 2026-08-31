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
    choices: { a: '-8', b: '3', c: '1', d: '5' }
  },
  {
    id: 5,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 4 \\\\ 6 \\\\ 8 \\end{bmatrix}\\) ، فإن \\(a_{31}\\) يساوي:',
    choices: { a: '31', b: '8', c: '6', d: '4' }
  },
  {
    id: 6,
    text: 'إذا كان: \\(B = \\begin{bmatrix} 0 & 4 & -1 \\\\ 5 & -3 & 6 \\end{bmatrix}\\)، فإن \\(3a_{12}\\) يساوي:',
    choices: { a: '4', b: '12', c: '3', d: '15' }
  },
  {
    id: 7,
    text: 'إذا كان: \\(A = \\begin{bmatrix} 3 & 5 \\\\ -1 & x \\\\ 0 & 4 \\end{bmatrix}\\) ، فجد قيمة العنصر الموجود بالصف الثالث والعمود الثاني:',
    choices: { a: '-1', b: 'x', c: '4', d: '5' }
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
    choices: { a: '3', b: '2', c: '6', d: '5' }
  },
  {
    id: 11,
    text: 'إذا علمت أن المصفوفة احتوت على 4 من الصفوف و 3 من الأعمدة فإن عدد عناصرها يساوي:',
    choices: { a: '\\(3 \\times 4\\)', b: '7', c: '\\(4 \\times 3\\)', d: '\\(4 \\times 4\\)' }
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
    choices: { a: '15', b: '-12', c: '5', d: '-2' }
  },
  {
    id: 16,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 4 & -1 & 5 \\\\ 6 & -3 & 9 \\\\ 2 & 7 & -1 \\end{bmatrix}\\) ، فجد \\(a_{21} - a_{13}\\):',
    choices: { a: '4', b: '-1', c: '1', d: '-3' }
  },

  {
    id: 17,
    text: 'إذا كانت: \\(A = \\begin{bmatrix} 2 & 5 & -4 \\\\ 6 & 2 & x \\\\ 1 & -x & 7 \\end{bmatrix}\\) ، وكان \\((a_{32})^3 = 27\\) ، فجد قيمة x:',
    choices: { a: '3', b: '-3', c: '9', d: '-9' }
  },
  {
    id: 18,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & 10 \\\\ 5 & x-1 \\end{bmatrix} = \\begin{bmatrix} 2 & x^2+1 \\\\ 5 & 2 \\end{bmatrix}\\) ، فجد قيمة x:',
    choices: { a: '-3', b: '3', c: '\\(\\pm 3\\)', d: '\\(\\pm 9\\)' }
  },
  {
    id: 19,
    text: 'أحدد موقع العنصر الذي قيمته (8) في المصفوفة: \\(B = \\begin{bmatrix} 1 & -1 & 2 \\\\ 3 & 7 & 4 \\\\ 6 & 8 & 0 \\\\ 5 & -6 & 9 \\end{bmatrix}\\)',
    choices: { a: '\\(b_{33}\\)', b: '\\(b_{23}\\)', c: '\\(b_{32}\\)', d: '\\(b_{22}\\)' }
  },
  {
    id: 20,
    text: 'إذا كانت: \\(C = \\begin{bmatrix} 2 & 4 & 0 \\\\ 5 & 1 & 8 \\\\ 7 & 2 & 4 \\end{bmatrix}\\) ، فإن المصفوفة C مربعة من الرتبة:',
    choices: { a: '3', b: '2', c: '8', d: '6' }
  },
  {
    id: 21,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & 4 \\\\ 2x+1 & 0 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 5 & 0 \\end{bmatrix}\\) ، فإن قيمة x هي:',
    choices: { a: '5', b: '4', c: '2', d: '3' }
  },
  {
    id: 22,
    text: 'إذا كانت \\(A = \\begin{bmatrix} 3 & 7 \\\\ x & 5 \\end{bmatrix}\\) ، \\(B = \\begin{bmatrix} 3 & 7 \\\\ 4 & 5 \\end{bmatrix}\\) ، وكانت \\(A = B\\) ، فجد قيمة x:',
    choices: { a: '4', b: '7', c: '3', d: '5' }
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
    choices: { a: '3', b: '-3', c: '9', d: '-9' }
  },
  {
    id: 25,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & x+3 \\\\ 4 & y \\end{bmatrix} = \\begin{bmatrix} 2 & 9 \\\\ 4 & 7 \\end{bmatrix}\\) ، فجد قيم x, y:',
    choices: { a: 'x=7, y=6', b: 'x=1, y=7', c: 'x=6, y=7', d: 'x=6, y=1' }
  },
  {
    id: 26,
    text: 'إذا كانت: \\(\\begin{bmatrix} 2 & x^2-1 \\\\ 5 & x+2 \\end{bmatrix} = \\begin{bmatrix} 2 & 8 \\\\ 5 & 5 \\end{bmatrix}\\) ، فجد قيمة x:',
    choices: { a: '9', b: '3, -3', c: '-3', d: '3' }
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
    choices: { a: '-1', b: '1', c: '0', d: '2' }
  },
  {
    id: 30,
    text: 'يبين الجدول المجاور نتائج استطلاع آراء عينات من سكان ثلاث قرى متجاورة بخصوص مشروع سياحي يراد إقامته في موقع يتوسط هذه القرى. رتب هذه البيانات في مصفوفة مكوّنة من هذه القرى على أن يكون عدد الآراء المؤيدة مرتباً "ترتيب تصاعدي" — الجدول: القرية A: مؤيّد 800، معارض 130، محايد 70 | القرية B: مؤيّد 460، معارض 250، محايد 40 | القرية C: مؤيّد 1300، معارض 700، محايد 200',
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
    models: {
      'النموذج الأول': { from: 1, to: 16 },
      'النموذج الثاني': { from: 17, to: 31 }
    }
  }
};
