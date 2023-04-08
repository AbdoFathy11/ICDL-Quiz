const questions = [
  // {
  //   arabic: {
  //     question: 'أي من الاتي يًعد سوفت وير ؟',
  //     options: [
  //       'برامج الكمبيوتر',
  //       'الشبكة اللاسلكية',
  //       'وحدة التخزين الخارجية',
  //       'الجهاز الملحق',
  //     ],
  //     correctAnswer: 0, // الإجابة أول عنصر في المصفوفة "برامج الكمبيوتر" لذلك 0 يشير إليها
  //   },
  //   english: {
  //     question: 'Which one of the following answers is software ?',
  //     options: [
  //       'Computer Programs',
  //       'A Wireless Network',
  //       'An External Storage',
  //       'An Accessory Device',
  //     ],
  //     correctAnswer: 0,
  //   },
  // },
  // {
  //   arabic: {
  //     question: 'أي من الاتي يصف شبكة لاسلكية تحتاج إلى كلمة مرور للوصول لها ؟',
  //     options: ['شبكة مغلقة', 'شبكة محمية', 'شبكة معطلة', 'شبكة مفتوحة'],
  //     correctAnswer: 1,
  //   },
  //   english: {
  //     question:
  //       'Which one of the following answers describes a wireless network that requires a password to access it ?',
  //     options: [
  //       'Closed Network',
  //       'Protected Network',
  //       'Disabled Network',
  //       'Open Network',
  //     ],
  //     correctAnswer: 1,
  //   },
  // },
  // {
  //   arabic: {
  //     question: 'أي مما يلي هو أفضل وصف يوضح الغرض الأساسي من شبكات الحاسوب ؟',
  //     options: [
  //       'لتشغيل الموسيقى',
  //       'لإنشاء شاشة توقف',
  //       'لمشاركة البينات والأجهزة والوصول الامن',
  //       'للتنقل فيما بين البرامج',
  //     ],
  //     correctAnswer: 2,
  //   },
  //   english: {
  //     question:
  //       'Which one of the following answers is the best describtion that show the main purpose of computer network ?',
  //     options: [
  //       'To Play Music',
  //       'To Create a Screen Saver',
  //       'To Share and Access Data and Devices Securely',
  //       'Mobility between Programs',
  //     ],
  //     correctAnswer: 2,
  //   },
  // },
  // {
  //   arabic: {
  //     question:
  //       'أي من العبارات الاتية يعد صحيحاً عن الشبكة العنكبوتية (الإنترنت) ؟',
  //     options: [
  //       'مجموعة كبيرة من المستندات',
  //       'شبكة ضخمة من أجهزة الحاسوب المرتبطة ببعضها البعض ومنتشرة حول العالم',
  //       'مجموعة من صفحات الويب',
  //       'لغة برمجة بسيطة تستخدم المتصفحات لعرض صفحات الويب',
  //     ],
  //     correctAnswer: 1,
  //   },
    // english: {
    //   question: 'Which one of the following answers is true about internet ?',
    //   options: [
    //     'A Large Collection of Documents',
    //     'A network of computers connected to each other and distributed around the world',
    //     'A collection of web pages',
    //     'A simple programming language that uses browsers to display web pages',
    //   ],
    //   correctAnswer: 1,
    // },
  // },
  // {
  //   arabic: {
  //     question: 'أي من المهام الاتية يمكن ان يًنفذ بإستخدام التطبيقات الاتية ؟',
  //     options: [
  //       'تقديم الدعم الفني للشبكات',
  //       'تشغيل الحاسب الالي',
  //       'إدارة المكونات المادية للحاسوب',
  //       'معالجة النصوص',
  //     ],
  //     correctAnswer: 3,
  //   },
  //   english: {
  //     question:
  //       'Which one of the following tasks can be implemented using on of the following application ?',
  //     options: [
  //       'Provide techneical support for networks',
  //       'Turn on computer',
  //       'Manage the physical components of the computer',
  //       'Word processing',
  //     ],
  //     correctAnswer: 3,
  //   },
  // },
  // {
  //   arabic: {
  //     question: 'أي من الطرق الاتية تساعد على تحسين أداء الحاسوب ؟',
  //     options: [
  //       'إضافة برامج جديدة',
  //       'تشغيل جميع التطبيقات في ان واحد',
  //       'إضافة جهاز modem ',
  //       'إضافة رامات جدبدة',
  //     ],
  //     correctAnswer: 3,
  //   },
  //   english: {
  //     question:
  //       'Which one of the following tasks can be implemented using on of the following application ?',
  //     options: [
  //       'Add new programs',
  //       'Run all applications at once ',
  //       'Add a modern device',
  //       'Add a new RAMs',
  //     ],
  //     correctAnswer: 3,
  //   },
  // },
  // {
  //   arabic: {
  //     question:
  //       'أي من اسماء الملفات التالية هي تسمية جيدة لملف يحتوي على سجلات مبيعات لشهر يناير ؟',
  //     options: [
  //       'Sales.accdb',
  //       'JanuarySales.accdb',
  //       'January_Sales_.accdb',
  //       'January$_%Sales.accdb',
  //     ],
  //     correctAnswer: 3,
  //   },
  //   english: {
  //     question:
  //       'Which one of the following file name is approoriate for contain sales records for month january ?',
  //     options: [
  //       'Sales.accdb',
  //       'JanuarySales.accdb',
  //       'January_Sales_.accdb',
  //       'January$_%Sales.accdb',
  //     ],
  //     correctAnswer: 3,
  //   },
  // },
  // {
  //   arabic: {
  //     question: 'أي من الاتي يعطي الحق للمستخدم لاستخدام البرامج التطبيقية ؟',
  //     options: ['تصريح', 'ترخيص', 'حقوق الطبع والنشر', 'توكيل'],
  //     correctAnswer: 1,
  //   },
  //   english: {
  //     question:
  //       'ًWhich one if the following gives an end user the right to use software application ?',
  //     options: ['A Permit', 'A License', 'A Copyright', 'An Authorization'],
  //     correctAnswer: 1,
  //   },
  // },
  // {
  //   arabic: {
  //     question:
  //       'أي من خيارات الطباعة الاتية نختار عندما نريد طباعة صفحة معروضة أمامك داخل أحد المستندات ؟',
  //     options: [
  //       'الصفحة الحالية',
  //       'مادة الطباعة',
  //       'ملائمة حجم الورقة',
  //       'عدد الصفحات في الورقة',
  //     ],
  //     correctAnswer: 0,
  //   },
  //   english: {
  //     question:
  //       'ًWhich one the following options to print the active page in open document ?',
  //     options: [
  //       'Current page',
  //       'Print What ',
  //       'Proper size paper',
  //       'Number of pages per sheet',
  //     ],
  //     correctAnswer: 0,
  //   },
  // },
  {
    arabic: {
      question: 'أي من الأقراص الصلبة يًعد أكبر سعة تخزينية ؟',
      options: [
        'قرص بسعة 100 ميجابايت',
        'قرص بسعة 10000 كيلوبايت',
        'قرص بسعة 1 تيرابايت',
        'قرص بسعة 300 جيجابايت',
      ],
      correctAnswer: 2,
    },
    english: {
      question:
        'Which one of the following hard disks has the largest storage capacity ?',
      options: [
        'A 100 MB hard disks',
        'A 10000 KB hard disks ',
        'A 1TB hard disks',
        'A 300 GB hard disks',
      ],
      correctAnswer: 2,
    },
  },
  {
    arabic: {
      question: 'أي من الاتي يصف معدل النقل (ما المقصود بمعدل النقل) ؟',
      options: [
        'سرعة المعالج داخل الحاسوب',
        'تستخدم في قياس سرعة نقل البيانات',
        'حجم قرص التخزين في جهاز الحاسوب',
        'مقدار الوقت المطلوب لإعادة تشغيل الحاسوب',
      ],
      correctAnswer: 1,
    },
    english: {
      question: 'Which one of the following describes transfer rate ?',
      options: [
        'The speed of the processor inside the computer',
        'The speed at which data transmitted',
        'The size of the storage disk in the computer',
        'The amount of required to restart the computer',
      ],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'اي من الاتي يصف حفظ الملفات من جهازك إلى خادم عبر الإنترنت ؟',
      options: [
        'التخزين على شبكة الأنترنت',
        'تقنية البث الرقمي',
        'خدمة البث المباشر',
        'تدفق البيانات',
      ],
      correctAnswer: 0,
    },
    english: {
      question:
        'Which one of the following describes saving files from your computer to remote server by using internet ?',
      options: [
        'Online Storage',
        'Podcasting',
        'Broadcasting',
        'Data Streaming',
      ],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question: 'أي من الاتي يعد كلمة مرور جيدة ؟',
      options: ['1*Ru55el OR *1goh@rry', 'Williamjohn', '12345', 'Wj1980'],
      correctAnswer: 0,
    },
    english: {
      question: 'Which one of the following is a good password ?',
      options: ['1*Ru55el OR *1goh@rry', 'Williamjohn', '12345', 'Wj1980'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'أي من الاتي تعد أفضل لحماية الكمبيوتر من الإصابة بالبرامج الضارة ؟',
      options: [
        'عمل تحديث بأنتظام لبرنامج المضاد للفيروسات',
        'إجراء عمليات النسخ الاختياطي بشكل دوري',
        'تثبيت برنامج لمنع عمليات القرصنة الالكترونية',
        'تعيين كلمة مرور لحماية نظام الحاسوب',
      ],
      correctAnswer: 0,
    },
    english: {
      question:
        'Which one of the following is the best way of preventing your computer from being infected by harmful programs ?',
      options: [
        'Regular updating the anti-viruses software on the system',
        'Perform backups periodically',
        'Install a program to prevent hacking operations',
        'Set password to protect computer system',
      ],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'أي من الاتي يؤدي إلى حفظ الطاقة (تعمل على ترشيد إستهلاك الطاقة) ؟',
      options: [
        'تحديث شاشة التوقف الخاصة بك',
        'تغيير التصميم الخاص بخلفية الشاشة',
        'إيقاف تشغيل شاشة الكمبيوتر عندما لا تكون قيد الاستعمال العادي',
        'ترك الحاسوب قيد التشغيل بشكل مستمر لتفادي إعادة اقلاع النظام',
      ],
      correctAnswer: 2,
    },
    english: {
      question: 'Which one of the following saves energy ?',
      options: [
        'Regular updating the anti-viruses software on the system',
        'Perform backups periodically',
        'Install a program to prevent hacking operations',
        'Set password to protect computer system',
      ],
      correctAnswer: 2,
    },
  },
  {
    arabic: {
      question: 'لتحديد ملفين او أكثر من الملفات المتجاورة داخل مجلد ما',
      options: ['ESC', 'ALT', 'TAB', 'Shift'],
      correctAnswer: 2,
    },
    english: {
      question: 'Which one of the following saves energy ?',
      options: [
        'Regular updating the anti-viruses software on the system',
        'Perform backups periodically',
        'Install a program to prevent hacking operations',
        'Set password to protect computer system',
      ],
      correctAnswer: 2,
    },
  },
  {
    arabic: {
      question: 'إذا أردت محاذاة للفقرة المحددة یسار تستخدم مفتاحى  Ctrl + x',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question:
        'If you want to align the selected paragraph to the left, use the Ctrl + x keys',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'أحدث إصدار نظام تشغیل من الإصدارات الآتیة هو  Windows 8.1',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question:
        'The latest operating system version of the following versions is Windows 8.1',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'كل ما یلى یعتبر من منافذ الكمبیوتر (Ports ) عدا  UPS',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'All of the following are considered computer ports (Ports) except UPS',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question: 'لكى یحق استخدام أحد تطبیقات برامج الكمبیوتر لابد من توفر رخصة',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'In order to have the right to use a computer software application, a license must be available',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'وظیفة الباور سبلاى هى توصیل من خمسة إلى ١٢ فولت لكل أجزاء الكمبیوتر كل مكان حسب حاجته',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'The function of the power supply is to connect from five to 12 volts to all parts of the computer, every place according to its need',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question: 'یتعرف نظام التشغیل على نوعیة الملفات من Extension',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question: 'The operating system recognizes the file type from Extension',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'عند حذف ملف من الوسیط التخزینى فإنه یرسل إلى سلة المحذوفات فى حالة وجوده فى USP drive',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question:
        'When a file is deleted from the storage medium, it is sent to the Recycle Bin if it is in the USP drive.',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question:
        ' یحتفظ الكمبیوتر بالمعلومات والبرامج التى تستخدم فى بدء التشغیل من خلال ذاكرة Hard disk',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question:
        'The computer maintains the information and programs that are used to start it through the hard disk memory',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'یمكن استدعاء المساعدة فى نظام التشغیل عن طریق F9',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question: 'Help can be called up in the operating system via F9',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'یمكن أخذ صورة من الشاشة عن طریق Print screen',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question: 'A picture can be taken from the screen via Print screen',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'لنقل رمز موجود على سطح المكتب باستخدام إجراء الفأرة Drag and Drop',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'Move an icon on the desktop using the Drag and Drop mouse action',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question: 'للتحكم فى عرض المجلدات المخفیة نستخدم Folder option',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'To control the display of hidden folders, we use the Folder option',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question: 'البیانات المخزنة باسم على القرص تسمى Drivers',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question: 'The data stored under a name on the disk is called Drivers',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'بایت واحد یعادل لحفظ ملف نستخدم Save فقط',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question: 'To save a file we just use Save',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'الملف الذى یتم تغییر شكله Folder',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question: 'The file whose format is changed is Folder',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
]
const questions2 = [
  {
    arabic: {
      question:
        'أي نوع من المحاسبة الخارجية التالية يوفر معلومات للمستفيدين الخارجين ؟',
      options: [
        'المحاسبة المالية',
        'المحاسبة الحكومية',
        'محاسبة التكاليف',
        'جميع الإجابات السابقة خاطئة',
      ],
      correctAnswer: 0,
    },
    english: {
      question:
        'Which type of external accounting provides information to external users?',
      options: [
        'Financial Accounting',
        'Governmental Accounting',
        'Cost Accounting',
        'All of the above are incorrect',
      ],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'إذا كان إجمالي المشتريات 70000 جنيه والخصم المسموع به 10000 جنيه والخصم المكتسبة 3000 جنيه ومردودات المشتريات 7000 جنيه ومسموحات المبيعات 5000 جنيه فإن صافي المشتريات يكون ؟',
      options: [
        '60000 جنيه',
        '55000 جنيه',
        '45000 جنيه',
        'جميع الإجابات السابقة خاطئة',
      ],
      correctAnswer: 2,
    },
    english: {
      question:
        'If total purchases are 70,000 EGP, discounts taken are 10,000 EGP, discounts earned are 3,000 EGP, purchase returns are 7,000 EGP, and sales allowances are 5,000 EGP, what is the net purchases amount?',
      options: [
        '60,000 EGP',
        '55,000 EGP',
        '45,000 EGP',
        'All of the above are incorrect',
      ],
      correctAnswer: 2,
    },
  },
  {
    arabic: {
      question:
        'في 30/12 ظهرت الأرصدة التاليى في ميزان المراجعة قبل التسويات لمؤسسة الأنوار :-\nمدينون 81000 جنيه - مخصص ديون مشكوك في تحصيلها 9000 جنيه وعند الجرد تبين أن هناك ديوناً معدومة قيمتها 1000 حنيه كما تقرر تكوين مخصص للديون المشكوك في تحصيلها بنسبة 6% من رصيد المدينين بناء على ما تقدم فإن حساب المدينين مطروحاً منه مخصص الديون المشكوك في تحصيلها (الديون الجديدة) الذي يظهر في قائمة المركز المالي ',
      options: ['81000 جنيه', '75200 جنيه', '71000 جنيه', '80000 جنيه'],
      correctAnswer: 1,
    },
    english: {
      question:
        'On 30/12, the following balances appeared in the audit balance before adjustments for Al-Anwar Institution: Debit 81,000 pounds - Deduct doubtful debts of 9,000 pounds. During the inventory, it was found that there were bad debts worth 1,000 pounds. It was also decided to form a reserve for doubtful debts by 6% of the debit balance based on what has been presented. If the debt reserve for doubtful debts (new debts) that appears in the financial center list is deducted from it, then what is the amount of the debtors account?',
      options: ['81000 pounds', '75200 pounds', '71000 pounds', '80000 pounds'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'تعد الكميالات المسحوبة على المؤسسة ؟',
      options: ['أوراق قبض', 'سندات أذنية', 'أوراق دفع', 'أوراق مالية'],
      correctAnswer: 2,
    },
    english: {
      question: 'What are the payments drawn on the enterprise called?',
      options: ['Receipt papers', 'Debentures', 'Payment papers', 'Securities'],
      correctAnswer: 2,
    },
  },
  {
    arabic: {
      question:
        'بلغ ايراد الخدمات العلاجية المحصل فعليا خلال العام في مستوصف 400000 جنيه فإذا علمت ان قيمة بعض الخدمات العلاجية التي قدمت للمرضى ولم تسجل في الدفاتر ولم تحصل قيمتها بعد حتى نهاية العام بلغت 30000 جنيه إذن مبلغ إيرادات الخدمات العلاجية الذي يظهر في قائمة الدخل هو ؟',
      options: [
        '430000 جنيه',
        '370000 جنيه',
        '400000 جنيه',
        'جميع الإجابات السابقة خاطئة',
      ],
      correctAnswer: 2,
    },
    english: {
      question:
        'The actual revenue from medical services collected during the year at the clinic was 400,000 pounds. If the value of some medical services provided to patients and not recorded in the books and their value has not been collected yet until the end of the year was 30,000 pounds, then the amount of revenue from medical services that appears in the income statement is?',
      options: [
        '430,000 pounds',
        '370,000 pounds',
        '400,000 pounds',
        'All of the above answers are incorrect',
      ],
      correctAnswer: 2,
    },
  },
  {
    arabic: {
      question:
        'إذا كان رصيد كل من البنك 50000 جنيه وأوراق الدفع 8000 جنيه وأوراق القبض 5000 جنيه والأثاث 20000 جنيه والمباني 100000 جنيه وبضاعة أخر المدة 15000 جنيه والسيارات 80000 جنيه فإن إجمالي الأصول المتداولة يكون ',
      options: [
        '70000 جنيه',
        '55000 جنيه',
        '200000 جنيه',
        'جميع الإجابات السابقة خاطئة',
      ],
      correctAnswer: 1,
    },
    english: {
      question:
        'If each bank account has a balance of 50,000 EGP, payment papers of 8,000 EGP, receipt papers of 5,000 EGP, furniture of 20,000 EGP, buildings of 100,000 EGP, last period goods of 15,000 EGP, and cars of 80,000 EGP, what is the total current assets?',
      options: [
        '70,000 EGP',
        '55,000 EGP',
        '200,000 EGP',
        'All of the above answers are incorrect',
      ],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question:
        'أي من البنود التالية يظهر في كل من قائمة الدخل وقائمة المركز المالي؟',
      options: [
        'العقارات',
        'المدينون',
        'رأس المال',
        'صافي الدخل أو صافي الخسارة',
      ],
      correctAnswer: 3,
    },
    english: {
      question:
        'Which one of the following items appears in both the income statement and the balance sheet?',
      options: ['Properties', 'Creditors', 'Capital', 'Net Income or Net Loss'],
      correctAnswer: 3,
    },
  },
  {
    arabic: {
      question: 'تعيين احد العامليين الجدد في المؤسسة يؤدي إلى؟',
      options: [
        'نقص في الأصول ونقص في حقوق الملكية',
        'زيادة في الخصوم ونقص في حقوق الملكية',
        'نقص في الاصول ونقص في الخصوم',
        'لا يؤثر مطلقا في المعادلة المحاسبية',
      ],
      correctAnswer: 3,
    },
    english: {
      question: 'Hiring a new employee in the organization leads to ?',
      options: [
        'Decrease in assets and decrease in equity',
        'Increase in liabilities and decrease in equity',
        'Decrease in assets and decrease in liabilities',
        'No effect at all on the accounting equation',
      ],
      correctAnswer: 3,
    },
  },
  {
    arabic: {
      question: 'من الخصائص النوعية للمعلومات المحاسبية؟',
      options: [
        'الملائمة',
        'الموثوقية ',
        'القابلية للمقارنة',
        'جميع الإجابات السابقة خاطئة',
      ],
      correctAnswer: 3,
    },
    english: {
      question:
        'Which one of the following is a qualitative characteristic of accounting information?',
      options: [
        'Relevance',
        'Reliability',
        'Comparability',
        'All of the above are incorrect',
      ],
      correctAnswer: 3,
    },
  },
  {
    arabic: {
      question:
        'إذا كان إجمالي المبيعات 410000 جنيه ومردودات المبيعات 10000 جنيه وتكلفة البضاعة المباعة 300000 جنيه ومصروفات التشغيل 60000 جنيه فإن مجمل الربح يكون ؟',
      options: [
        '400000 جنيه',
        '100000 جنيه',
        '340000 جنيه',
        'جميع الإجابات السابقة خاطئة',
      ],
      correctAnswer: 2,
    },
    english: {
      question:
        'If total sales are 410,000 EGP, sales returns are 10,000 EGP, cost of goods sold is 300,000 EGP, and operating expenses are 60,000 EGP, what is the total profit ?',
      options: [
        '400,000 EGP',
        '100,000 EGP',
        '340,000 EGP',
        'All of the above answers are incorrect',
      ],
      correctAnswer: 2,
    },
  },
  {
    arabic: {
      question: 'تستخدم المحاسبة في حالة المنشأت التي تهدف إلى تحقيق الربح ؟',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question: 'Accounting is used in entities that aim to achieve profit ?',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'تتميز الأنشطة التجارية بإنها تحدث إضافة لما تقوم بحيازته من خامات او مواد اولية او سلع نصف مصنعة ؟',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'Commercial activities are characterized by happening in addition to what they possess of raw materials, raw goods, or semi-manufactured goods ?',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'تختلف الأشكال القانونية لمزاولة الأنشطة بإختلاف القوانين المعمول بها في الدولة',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'Legal forms of conducting activities differ depending on the laws applicable in the country.',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'يستخدم أصلاح المنشأة الفردية لوصف الشركة التي يشترك في إدارتها أكثر من شريك',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'The term "sole proprietorship" is used to describe a company that is managed by more than one partner.',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question: 'لا يوجد إختلاف بين شركات الأشخاص وشركات الأموال',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question:
        'There is no difference between personal companies and capital companies.',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
  {
    arabic: {
      question:
        'تعتبر المنشأة وحدة محاسبية مستقلة عن ملاكها سواء أكانت منشأة فردية أو شركة أشخاص أو شركة أموال',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question:
        'The entity is an independent accounting unit from its owners, whether it is an individual entity, a personal company or a capital company.',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'يقتصر الهدف من المحاسبة المالية على تحديد المراكز المالية لمنشأت الأعمال في أي وقت يطلب فيه؟',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'Does the objective of financial accounting only limit to identifying the financial centers of business entities at any time upon request?',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question: 'تقوم المحاسبة بعدة وظائف لتحقيق أهدافها؟',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    english: {
      question:
        'Does accounting serve multiple functions to achieve its objectives?',
      options: ['True', 'False'],
      correctAnswer: 0,
    },
  },
  {
    arabic: {
      question:
        'تسعى كل من محاسبة التكاليف والمحاسبة الإدارية إلى تحقيق هدف واحد؟',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    english: {
      question:
        'Does both cost accounting and managerial accounting aim to achieve one goal?',
      options: ['True', 'False'],
      correctAnswer: 1,
    },
  },
]
let writingDone = false
const theForm = {
  main: document.getElementById('form'),
  name: document.getElementById('name'),
  grad: document.getElementById('grad'),
  branch: document.getElementById('branch'),
  select: document.getElementById('select'),
  btn: document.getElementById('formBtn'),
}
let test = localStorage.getItem('quiz')
const writing = {
  arabic: {
    question: 'ما هو تعريف الحاسوب ومكوناته؟',
    answer:
      'هو مجموعة من الأجهزة المتكاملة التي تقوم بإدخال البيانات والمعلومات وإخراجها ومعالجتها وتخزينها. أنظمة الكمبيوتر مبنية حاليًا حول جهاز معالجة رقمي واحد على الأقل. هناك خمسة مكونات رئيسية للأجهزة في نظام الكمبيوتر: أجهزة الإدخال والمعالجة والتخزين والإخراج والاتصالات',
  },
  english: {
    question: 'What is the definition of a computer and its components?',
    answer:
      'It is a collection of integrated devices that input, process, output, and store data and information. Computer systems are currently built around at least one digital processing device. There are five main hardware components in a computer system: input devices, processing devices, storage devices, output devices, and communication devices.',
  },
}

if (theForm.btn) {
  theForm.btn.addEventListener('click', (e) => {
    e.preventDefault()
    const info = {
      name: theForm.name.value,
      branch: theForm.branch.value,
      grad: theForm.grad.value,
    }
    localStorage.setItem('info', JSON.stringify(info))
    localStorage.setItem(
      'quiz',
      `${theForm.select.options[theForm.select.selectedIndex].value}`,
    )
    location.replace('./exam.html')
  })
}
function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  let matrix = []

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        )
      }
    }
  }

  return matrix[b.length][a.length]
}
let writingAns
let writingPoints
let writingCorrAns
const questionContainer = document.getElementById('question-constainer')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous')
const resultContainer = document.getElementById('result-container')

let previuos = []
let prevLenght
let score = 0
let answer = null
let randomQuestion
let language = 'arabic'

function postQuestion(question) {
  if (!question && test == 0) {
    if (nextBtn.getAttribute('data-id') === 'writing') {
      questionContainer.innerHTML = `
        <div class="question">${writing[language]['question']}</div>
        <div class="options">
            <textarea id="writing-in" cols="30" rows="4" placeholder="${
              language == 'english'
                ? 'write your answer here !'
                : 'أكتب إجابتك هنا!'
            }"></textarea>
        </div>
        `
      document
        .getElementById('writing-in')
        .addEventListener('input', (e) =>
          e.target.value.length >= 0
            ? nextBtn.removeAttribute('disabled')
            : nextBtn.setAttribute('disabled', ''),
        )
    }
    return
  }
  if (Array.isArray(question)) {
    const thequestion = question[0][language]
    const ans = question[1]
    const optionsHTML = thequestion.options
      .map((option, index) => {
        return `<div class="option" ${
          thequestion.correctAnswer == index
            ? 'style="background: #04dd71;"'
            : ans == index && ans != answer
            ? 'style="background: #b8002a;"'
            : ''
        } data-id="${index}">${option}</div>`
      })
      .join('')
    questionContainer.innerHTML = `
        <div class="question">${thequestion.question}</div>
        <div class="options">${optionsHTML}</div>
    `
  } else {
    const thequestion = question[language]
    const optionsHTML = thequestion.options
      .map((option, index) => {
        return `<div class="option" data-id="${index}">${option}</div>`
      })
      .join('')
    questionContainer.innerHTML = `
            <div class="question">${thequestion.question}</div>
            <div class="options">${optionsHTML}</div>
        `
    const optionElements = document.querySelectorAll('.option')
    optionElements.forEach((optionElement) => {
      optionElement.addEventListener('click', () => {
        optionElements.forEach((a) => {
          a.style.backgroundColor = '#eee'
        })
        optionElement.style.backgroundColor = '#ff8e00'
        answer = +optionElement.getAttribute('data-id')
        nextBtn.removeAttribute('disabled')
      })
    })
  }
  return question
}
function generateQuestion() {
  let index
  if (test == 0) index = Math.floor(Math.random() * questions.length)
  if (test == 1) index = Math.floor(Math.random() * questions2.length)

  if (test == 0) {
    randomQuestion = questions[index]
    questions.splice(index, 1)
  } else if (test == 1) {
    randomQuestion = questions2[index]
    questions2.splice(index, 1)
  }
}
nextBtn.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-id') === 'writing') {
    const userAnswer = document.getElementById('writing-in').value
    writingAns = userAnswer
    writingCorrAns = writing[language]['answer']
    const distance = levenshteinDistance(writingCorrAns, userAnswer)
    score += Math.floor((266 - distance) / 13)
    writingPoints = score
    e.target.removeAttribute('data-id')
    generateQuestion()
    postQuestion(randomQuestion)
    e.target.setAttribute('disabled', '')
  } else {
    if (writingDone) {getResult()} else {
      if (answer === randomQuestion[language].correctAnswer) score++
    }
    if (
      (test == 1 && questions2.length <= 0)
    ) {
      getResult()
    }

    if (prevLenght < previuos.length) {
      postQuestion(previuos[prevLenght])
      prevLenght++
    } else {
      if (answer || answer === 0) {
        const optionElements = document.querySelectorAll('.option')
        if (answer !== randomQuestion[language]['correctAnswer']) {
          optionElements.forEach((optionElement) => {
            if (
              +optionElement.getAttribute('data-id') ===
              randomQuestion[language].correctAnswer
            ) {
              optionElement.style.backgroundColor = '#04dd71'
            } else if (+optionElement.getAttribute('data-id') === answer) {
              optionElement.style.backgroundColor = '#b8002a'
            }
          })
        }
        optionElements.forEach((optionElement) => {
          if (
            +optionElement.getAttribute('data-id') ===
            randomQuestion[language].correctAnswer
          ) {
            optionElement.style.backgroundColor = '#04dd71'
          }
        })
        setTimeout(() => {
          if (
            (test == 0 && questions.length <= 1) ||
            (test == 1 && questions2.length <= 1)
          ) {
            e.target.innerHTML = 'إنهاء'
          }
          if (test == 0 && questions.length <= 0) {
            nextBtn.setAttribute('data-id', 'writing')
            if (!writingDone) {
              postQuestion()
              document.getElementById('writing-in')
                ? document
                    .getElementById('writing-in')
                    .addEventListener('input', (e) =>
                      e.target.value.length > 0
                        ? nextBtn.removeAttribute('disabled')
                        : nextBtn.setAttribute('disabled', ''),
                    )
                : null
                writingDone = true
            } else getResult()
          } else {
            previuos.push([randomQuestion, answer])
            answer = null
            generateQuestion()
            postQuestion(randomQuestion)
            prevLenght = previuos.length
            nextBtn.setAttribute('disabled', '')
          }
        }, 1000)
      } else {
        postQuestion(randomQuestion)
        answer = null
        nextBtn.setAttribute('disabled', '')
      }
    }
  }
})
document.getElementById('language').addEventListener('click', (e) => {
  if (language === 'arabic') {
    e.target.innerHTML = 'العربية'
    prevBtn.innerHTML = 'Previous'
    nextBtn.innerHTML = 'Next'
    language = 'english'
    postQuestion(randomQuestion)
    questionContainer.style.direction = 'ltr'
  } else {
    e.target.innerHTML = 'English'
    nextBtn.innerHTML = 'التالي'
    prevBtn.innerHTML = 'السابق'
    language = 'arabic'
    questionContainer.style.direction = 'rtl'
    postQuestion(randomQuestion)
  }
})

prevBtn.addEventListener('click', () => {
  answer = null
  if (prevLenght > 0) {
    nextBtn.removeAttribute('disabled')
    postQuestion(previuos[prevLenght - 1])
    --prevLenght
  } else {
    alert('هذا أول الامتحان')
  }
})

function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  const paddedHours = hours.toString().padStart(2, '0')
  const paddedMinutes = minutes.toString().padStart(2, '0')
  const paddedSeconds = remainingSeconds.toString().padStart(2, '0')

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
}
let timer = 300
const timerDiv = document.querySelector('.timer')

const timing = setInterval(() => {
  if (timer > 0) {
    timer--
    timerDiv.innerHTML = `
        <h1>${secondsToTime(timer)}</h1>
        `
    timerDiv.style.color = `rgb(${300 - timer}, 0, 0)`
    timerDiv.style.border = `3px solid rgb(${300 - timer}, 0, 0)`
  } else {
    getResult()
  }
}, 1000)

function getResult() {
  if (document.querySelector('.question-constainer'))
    document.querySelector('.question-constainer').remove()
  if (document.querySelector('.footer'))
    document.querySelector('.footer').remove()
  if (test == 0) percent = (score * 100) / 50
  if (test == 1) percent = (score * 100) / 20
  let howWas = 'ضعيف جدأ'
  if (percent > 40) howWas = 'ضعيف'
  if (percent > 50) howWas = 'مقبول'
  if (percent > 60) howWas = 'جيد'
  if (percent > 70) howWas = 'جيد جدا'
  if (percent > 80) howWas = 'ممتاز'
  if (percent >= 98) howWas = 'فوق الممتاز'
  const studentInfo = JSON.parse(localStorage.getItem('info'))
  resultContainer.innerHTML = `<div class="container">
        <div class="box">

            <h1>النتيجة النهائية</h1>
            ${
              studentInfo &&
              `
            <div class="student-info">
            <h5>إسم الطالب: ${studentInfo.name}</h5>
            <h5>الفرقة: ${studentInfo.grad}</h5>
            <h5>الشعبة: ${studentInfo.branch}</h5>
            </div>
            `
            }
            <h1 class="result">${percent.toFixed(1)}%</h1>
            <h1 class="how-was">${howWas}</h1>
            <p>لقد حصلت على ${score} نقطة من ${
    test === 0 ? 50 : 20
  } نقطة حيث يساوي ${percent}%</p>
            <p>حظاً موفقا ونتمنى لك النجاح دائما</p>
            <div class="writing-result">
            <h2>
            ${
              test === 0
                ? `            إجابتك علي السؤال المقالي
            </h2>
            <p>${writingAns}</p>
            <h2>
            الإجابة النموذجية علي السؤال المقالي
            </h2>
            <p>${writingCorrAns}</p>
            </div>
            <p>حيث حصلت على ${writingPoints} من النقاط</P>`
                : ''
            }

            <div class="re">
                <p>يمكنك دخول الإختبار مرة أًخرى بضغطك على <span>مرة أًخرى</span> في الأسفل</p>
                <button id="reload-btn">مرة أًخرى</button>
            </div>
        </div>
    </div>
    `
  document
    .getElementById('reload-btn')
    .addEventListener('click', () => location.reload())
  clearInterval(timing)
}
generateQuestion()
postQuestion(randomQuestion)
