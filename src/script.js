<<<<<<< HEAD
const questions = [
    {
        arapic: {
            question: "أي من الاتي يًعد سوفت وير ؟",
            options: ["برامج الكمبيوتر", "الشبكة اللاسلكية", "وحدة التخزين الخارجية", "الجهاز الملحق"],
            correctAnswer: 0 // الإجابة أول عنصر في المصفوفة "برامج الكمبيوتر" لذلك 0 يشير إليها
        },
        english: {
            question: "Which one of the following answers is software ?",
            options: ["Computer Programs", "A Wireless Network", "An External Storage", "An Accessory Device"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يصف شبكة لاسلكية تحتاج إلى كلمة مرور للوصول لها ؟",
            options: ["شبكة مغلقة", "شبكة محمية", "شبكة معطلة", "شبكة مفتوحة"],
            correctAnswer: 1 
               },
        english: {
            question: "Which one of the following answers describes a wireless network that requires a password to access it ?",
            options: ["Closed Network", "Protected Network", "Disabled Network", "Open Network"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "أي مما يلي هو أفضل وصف يوضح الغرض الأساسي من شبكات الحاسوب ؟",
            options: ["لتشغيل الموسيقى", "لإنشاء شاشة توقف", "لمشاركة البينات والأجهزة والوصول الامن", "للتنقل فيما بين البرامج"],
            correctAnswer: 2 
               },
        english: {
            question: "Which one of the following answers is the best describtion that show the main purpose of computer network ?",
            options: ["To Play Music", "To Create a Screen Saver", "To Share and Access Data and Devices Securely", "Mobility between Programs"],
            correctAnswer: 2
        }
    }, 
    {
        arapic: {
            question: "أي من العبارات الاتية يعد صحيحاً عن الشبكة العنكبوتية (الإنترنت) ؟",
            options: ["مجموعة كبيرة من المستندات", "شبكة ضخمة من أجهزة الحاسوب المرتبطة ببعضها البعض ومنتشرة حول العالم", "مجموعة من صفحات الويب", "لغة برمجة بسيطة تستخدم المتصفحات لعرض صفحات الويب"],
            correctAnswer: 1 
               },
        english: {
            question: "Which one of the following answers is true about internet ?",
            options: ["A Large Collection of Documents", "A network of computers connected to each other and distributed around the world", "A collection of web pages", "A simple programming language that uses browsers to display web pages"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "أي من المهام الاتية يمكن ان يًنفذ بإستخدام التطبيقات الاتية ؟",
            options: ["تقديم الدعم الفني للشبكات", "تشغيل الحاسب الالي", "إدارة المكونات المادية للحاسوب", "معالجة النصوص"],
            correctAnswer: 3 
               },
        english: {
            question: "Which one of the following tasks can be implemented using on of the following application ?",
            options: ["Provide techneical support for networks", "Turn on computer", "Manage the physical components of the computer", "Word processing"],
            correctAnswer: 3
        }
    }, 
    {
        arapic: {
            question: "أي من الطرق الاتية تساعد على تحسين أداء الحاسوب ؟",
            options: ["إضافة برامج جديدة", "تشغيل جميع التطبيقات في ان واحد", "إضافة جهاز modem ", "إضافة رامات جدبدة"],
            correctAnswer: 3 
               },
        english: {
            question: "Which one of the following tasks can be implemented using on of the following application ?",
            options: ["Add new programs", "Run all applications at once ", "Add a modern device", "Add a new RAMs"],
            correctAnswer: 3
        }
    }, 
    {
        arapic: {
            question: "أي من اسماء الملفات التالية هي تسمية جيدة لملف يحتوي على سجلات مبيعات لشهر يناير ؟",
            options: ["Sales.accdb", "JanuarySales.accdb", "January_Sales_.accdb", "January$_%Sales.accdb"],
            correctAnswer: 3 
               },
        english: {
            question: "Which one of the following file name is approoriate for contain sales records for month january ?",
            options: ["Sales.accdb", "JanuarySales.accdb", "January_Sales_.accdb", "January$_%Sales.accdb"],
            correctAnswer: 3
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يعطي الحق للمستخدم لاستخدام البرامج التطبيقية ؟",
            options: ["تصريح", "ترخيص", "حقوق الطبع والنشر", "توكيل"],
            correctAnswer: 1
               },
        english: {
            question: "ًWhich one if the following gives an end user the right to use software application ?",
            options: ["A Permit", "A License", "A Copyright", "An Authorization"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "أي من خيارات الطباعة الاتية نختار عندما نريد طباعة صفحة معروضة أمامك داخل أحد المستندات ؟",
            options: ["الصفحة الحالية", "مادة الطباعة", "ملائمة حجم الورقة", "عدد الصفحات في الورقة"],
            correctAnswer: 0
               },
        english: {
            question: "ًWhich one the following options to print the active page in open document ?",
            options: ["Current page", "Print What ", "Proper size paper", "Number of pages per sheet"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الأقؤاص الصلبة يًعد أكبر سعة تخزينية ؟",
            options: ["قرص بسعة 100 ميجابايت", "قرص بسعة 10000 كيلوبايت", "قرص بسعة 1 تيرابايت", "قرص بسعة 300 جيجابايت"],
            correctAnswer: 2
               },
        english: {
            question: "Which one of the following hard disks has the largest storage capacity ?",
            options: ["A 100 MB hard disks", "A 10000 KB hard disks ", "A 1TB hard disks", "A 300 GB hard disks"],
            correctAnswer: 2
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يصف معدل النقل (ما المقصود بمعدل النقل) ؟",
            options: ["سرعة المعالج داخل الحاسوب", "تستخدم في قياس سرعة نقل البيانات", "حجم قرص التخزين في جهاز الحاسوب", "مقدار الوقت المطلوب لإعادة تشغيل الحاسوب"],
            correctAnswer: 1
               },
        english: {
            question: "Which one of the following describes transfer rate ?",
            options: ["The speed of the processor inside the computer", "The speed at which data transmitted", "The size of the storage disk in the computer", "The amount of required to restart the computer"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "اي من الاتي يصف حفظ الملفات من جهازك إلى خادم عبر الإنترنت ؟",
            options: ["التخزين على شبكة الأنترنت", "تقنية البث الرقمي", "خدمة البث المباشر", "تدفق البيانات"],
            correctAnswer: 0
               },
        english: {
            question: "Which one of the following describes saving files from your computer to remote server by using internet ?",
            options: ["Online Storage", "Podcasting", "Broadcasting", "Data Streaming"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يعد كلمة مرور جيدة ؟",
            options: ["1*Ru55el OR *1goh@rry", "Williamjohn", "12345", "Wj1980"],
            correctAnswer: 0
               },
        english: {
            question: "Which one of the following is a good password ?",
            options: ["1*Ru55el OR *1goh@rry", "Williamjohn", "12345", "Wj1980"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي تعد أفضل لحماية الكمبيوتر من الإصابة بالبرامج الضارة ؟",
            options: ["عمل تحديث بأنتظام لبرنامج المضاد للفيروسات", "إجراء عمليات النسخ الاختياطي بشكل دوري", "تثبيت برنامج لمنع عمليات القرصنة الالكترونية", "تعيين كلمة مرور لحماية نظام الحاسوب"],
            correctAnswer: 0
               },
        english: {
            question: "Which one of the following is the best way of preventing your computer from being infected by harmful programs ?",
            options: ["Regular updating the anti-viruses software on the system", "Perform backups periodically", "Install a program to prevent hacking operations", "Set password to protect computer system"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يؤدي إلى حفظ الطاقة (تعمل على ترشيد إستهلاك الطاقة) ؟",
            options: ["تحديث شاشة التوقف الخاصة بك", "تغيير التصميم الخاص بخلفية الشاشة", "إيقاف تشغيل شاشة الكمبيوتر عندما لا تكون قيد الاستعمال العادي", "ترك الحاسوب قيد التشغيل بشكل مستمر لتفادي إعادة اقلاع النظام"],
            correctAnswer: 2
               },
        english: {
            question: "Which one of the following saves energy ?",
            options: ["Regular updating the anti-viruses software on the system", "Perform backups periodically", "Install a program to prevent hacking operations", "Set password to protect computer system"],
            correctAnswer: 2
        }
    }, 
    {
        arapic: {
            question: "لتحديد ملفين او أكثر من الملفات المتجاورة داخل مجلد ما",
            options: ["ESC", "ALT", "TAB", "Shift"],
            correctAnswer: 2
               },
        english: {
            question: "Which one of the following saves energy ?",
            options: ["Regular updating the anti-viruses software on the system", "Perform backups periodically", "Install a program to prevent hacking operations", "Set password to protect computer system"],
            correctAnswer: 2
        }
    }, 
]

const questionConstainer = document.getElementById('question-constainer')
let score = 0
let answer
let randomQuestion
let language = 'arapic'
let prevQues = []
function postQuestion(question) {
    const thequestion = question[language]
    console.log(thequestion)
    questionConstainer.innerHTML = `
    <div class="question">${thequestion.question}</div>
    <div class="options">
        <div class="option" data-id="0">${thequestion.options[0]}</div>
        <div class="option" data-id="1">${thequestion.options[1]}</div>
        <div class="option" data-id="2">${thequestion.options[2]}</div>
        <div class="option" data-id="3">${thequestion.options[3]}</div>
    </div>
    `
    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach((optionElement) => {
      optionElement.addEventListener("click", () => {
        optionElements.forEach((a) => {a.style.backgroundColor = "#eee";})
        optionElement.style.backgroundColor = "#ff8e00";
        answer = +optionElement.getAttribute('data-id')
        console.log(answer)
      });
    });
    return question
}
function generateQuestion() {
    const index = Math.floor(Math.random() * questions.length)
    randomQuestion = questions[index]
    questions.splice(index, 1)

}
console.log(questions.length)

    document.getElementById("next").addEventListener('click', (e) => {
        const optionElements = document.querySelectorAll(".option");
        console.log(randomQuestion.arapic);
        if (answer !== randomQuestion[language]['correctAnswer']) {
            --score
            optionElements.forEach((optionElement) => {
                if (+optionElement.getAttribute('data-id') === randomQuestion[language].correctAnswer) {
                    optionElement.style.backgroundColor = "#04dd71";
                } else if (+optionElement.getAttribute('data-id') === answer){
                    optionElement.style.backgroundColor = "#b8002a";
                }
            });
        } 
        optionElements.forEach((optionElement) => {
            if (+optionElement.getAttribute('data-id') === randomQuestion[language].correctAnswer) {
                optionElement.style.backgroundColor = "#04dd71";
            }
        });
        setTimeout(() => {
            generateQuestion()
            postQuestion(randomQuestion)
        }, 1000)
    })
    document.getElementById('language').addEventListener("click", e => {
        if (language === 'arapic') {
            e.target.innerHTML = 'English';
            document.getElementById("next").innerHTML = 'Submit'
            language = 'english'
            postQuestion(randomQuestion)
            questionConstainer.style.direction = 'ltr'
        } else {
            e.target.innerHTML = 'العربية';
            document.getElementById("next").innerHTML = 'تأكيد'
            language = 'arapic'
            questionConstainer.style.direction = 'rtl'
            postQuestion(randomQuestion)
        }
    })
    generateQuestion()
=======
const questions = [
    {
        arapic: {
            question: "أي من الاتي يًعد سوفت وير ؟",
            options: ["برامج الكمبيوتر", "الشبكة اللاسلكية", "وحدة التخزين الخارجية", "الجهاز الملحق"],
            correctAnswer: 0 // الإجابة أول عنصر في المصفوفة "برامج الكمبيوتر" لذلك 0 يشير إليها
        },
        english: {
            question: "Which one of the following answers is software ?",
            options: ["Computer Programs", "A Wireless Network", "An External Storage", "An Accessory Device"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يصف شبكة لاسلكية تحتاج إلى كلمة مرور للوصول لها ؟",
            options: ["شبكة مغلقة", "شبكة محمية", "شبكة معطلة", "شبكة مفتوحة"],
            correctAnswer: 1 
               },
        english: {
            question: "Which one of the following answers describes a wireless network that requires a password to access it ?",
            options: ["Closed Network", "Protected Network", "Disabled Network", "Open Network"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "أي مما يلي هو أفضل وصف يوضح الغرض الأساسي من شبكات الحاسوب ؟",
            options: ["لتشغيل الموسيقى", "لإنشاء شاشة توقف", "لمشاركة البينات والأجهزة والوصول الامن", "للتنقل فيما بين البرامج"],
            correctAnswer: 2 
               },
        english: {
            question: "Which one of the following answers is the best describtion that show the main purpose of computer network ?",
            options: ["To Play Music", "To Create a Screen Saver", "To Share and Access Data and Devices Securely", "Mobility between Programs"],
            correctAnswer: 2
        }
    }, 
    {
        arapic: {
            question: "أي من العبارات الاتية يعد صحيحاً عن الشبكة العنكبوتية (الإنترنت) ؟",
            options: ["مجموعة كبيرة من المستندات", "شبكة ضخمة من أجهزة الحاسوب المرتبطة ببعضها البعض ومنتشرة حول العالم", "مجموعة من صفحات الويب", "لغة برمجة بسيطة تستخدم المتصفحات لعرض صفحات الويب"],
            correctAnswer: 1 
               },
        english: {
            question: "Which one of the following answers is true about internet ?",
            options: ["A Large Collection of Documents", "A network of computers connected to each other and distributed around the world", "A collection of web pages", "A simple programming language that uses browsers to display web pages"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "أي من المهام الاتية يمكن ان يًنفذ بإستخدام التطبيقات الاتية ؟",
            options: ["تقديم الدعم الفني للشبكات", "تشغيل الحاسب الالي", "إدارة المكونات المادية للحاسوب", "معالجة النصوص"],
            correctAnswer: 3 
               },
        english: {
            question: "Which one of the following tasks can be implemented using on of the following application ?",
            options: ["Provide techneical support for networks", "Turn on computer", "Manage the physical components of the computer", "Word processing"],
            correctAnswer: 3
        }
    }, 
    {
        arapic: {
            question: "أي من الطرق الاتية تساعد على تحسين أداء الحاسوب ؟",
            options: ["إضافة برامج جديدة", "تشغيل جميع التطبيقات في ان واحد", "إضافة جهاز modem ", "إضافة رامات جدبدة"],
            correctAnswer: 3 
               },
        english: {
            question: "Which one of the following tasks can be implemented using on of the following application ?",
            options: ["Add new programs", "Run all applications at once ", "Add a modern device", "Add a new RAMs"],
            correctAnswer: 3
        }
    }, 
    {
        arapic: {
            question: "أي من اسماء الملفات التالية هي تسمية جيدة لملف يحتوي على سجلات مبيعات لشهر يناير ؟",
            options: ["Sales.accdb", "JanuarySales.accdb", "January_Sales_.accdb", "January$_%Sales.accdb"],
            correctAnswer: 3 
               },
        english: {
            question: "Which one of the following file name is approoriate for contain sales records for month january ?",
            options: ["Sales.accdb", "JanuarySales.accdb", "January_Sales_.accdb", "January$_%Sales.accdb"],
            correctAnswer: 3
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يعطي الحق للمستخدم لاستخدام البرامج التطبيقية ؟",
            options: ["تصريح", "ترخيص", "حقوق الطبع والنشر", "توكيل"],
            correctAnswer: 1
               },
        english: {
            question: "ًWhich one if the following gives an end user the right to use software application ?",
            options: ["A Permit", "A License", "A Copyright", "An Authorization"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "أي من خيارات الطباعة الاتية نختار عندما نريد طباعة صفحة معروضة أمامك داخل أحد المستندات ؟",
            options: ["الصفحة الحالية", "مادة الطباعة", "ملائمة حجم الورقة", "عدد الصفحات في الورقة"],
            correctAnswer: 0
               },
        english: {
            question: "ًWhich one the following options to print the active page in open document ?",
            options: ["Current page", "Print What ", "Proper size paper", "Number of pages per sheet"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الأقراص الصلبة يًعد أكبر سعة تخزينية ؟",
            options: ["قرص بسعة 100 ميجابايت", "قرص بسعة 10000 كيلوبايت", "قرص بسعة 1 تيرابايت", "قرص بسعة 300 جيجابايت"],
            correctAnswer: 2
               },
        english: {
            question: "Which one of the following hard disks has the largest storage capacity ?",
            options: ["A 100 MB hard disks", "A 10000 KB hard disks ", "A 1TB hard disks", "A 300 GB hard disks"],
            correctAnswer: 2
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يصف معدل النقل (ما المقصود بمعدل النقل) ؟",
            options: ["سرعة المعالج داخل الحاسوب", "تستخدم في قياس سرعة نقل البيانات", "حجم قرص التخزين في جهاز الحاسوب", "مقدار الوقت المطلوب لإعادة تشغيل الحاسوب"],
            correctAnswer: 1
               },
        english: {
            question: "Which one of the following describes transfer rate ?",
            options: ["The speed of the processor inside the computer", "The speed at which data transmitted", "The size of the storage disk in the computer", "The amount of required to restart the computer"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "اي من الاتي يصف حفظ الملفات من جهازك إلى خادم عبر الإنترنت ؟",
            options: ["التخزين على شبكة الأنترنت", "تقنية البث الرقمي", "خدمة البث المباشر", "تدفق البيانات"],
            correctAnswer: 0
               },
        english: {
            question: "Which one of the following describes saving files from your computer to remote server by using internet ?",
            options: ["Online Storage", "Podcasting", "Broadcasting", "Data Streaming"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يعد كلمة مرور جيدة ؟",
            options: ["1*Ru55el OR *1goh@rry", "Williamjohn", "12345", "Wj1980"],
            correctAnswer: 0
               },
        english: {
            question: "Which one of the following is a good password ?",
            options: ["1*Ru55el OR *1goh@rry", "Williamjohn", "12345", "Wj1980"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي تعد أفضل لحماية الكمبيوتر من الإصابة بالبرامج الضارة ؟",
            options: ["عمل تحديث بأنتظام لبرنامج المضاد للفيروسات", "إجراء عمليات النسخ الاختياطي بشكل دوري", "تثبيت برنامج لمنع عمليات القرصنة الالكترونية", "تعيين كلمة مرور لحماية نظام الحاسوب"],
            correctAnswer: 0
               },
        english: {
            question: "Which one of the following is the best way of preventing your computer from being infected by harmful programs ?",
            options: ["Regular updating the anti-viruses software on the system", "Perform backups periodically", "Install a program to prevent hacking operations", "Set password to protect computer system"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يؤدي إلى حفظ الطاقة (تعمل على ترشيد إستهلاك الطاقة) ؟",
            options: ["تحديث شاشة التوقف الخاصة بك", "تغيير التصميم الخاص بخلفية الشاشة", "إيقاف تشغيل شاشة الكمبيوتر عندما لا تكون قيد الاستعمال العادي", "ترك الحاسوب قيد التشغيل بشكل مستمر لتفادي إعادة اقلاع النظام"],
            correctAnswer: 2
               },
        english: {
            question: "Which one of the following saves energy ?",
            options: ["Regular updating the anti-viruses software on the system", "Perform backups periodically", "Install a program to prevent hacking operations", "Set password to protect computer system"],
            correctAnswer: 2
        }
    }, 
    {
        arapic: {
            question: "لتحديد ملفين او أكثر من الملفات المتجاورة داخل مجلد ما",
            options: ["ESC", "ALT", "TAB", "Shift"],
            correctAnswer: 2
               },
        english: {
            question: "Which one of the following saves energy ?",
            options: ["Regular updating the anti-viruses software on the system", "Perform backups periodically", "Install a program to prevent hacking operations", "Set password to protect computer system"],
            correctAnswer: 2
        }
    }, 
]

let previuos = []
let prevLenght
const questionConstainer = document.getElementById('question-constainer')
let score = 15
let answer = null
let randomQuestion
let language = 'arapic'
let prevQues = []
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("previous")

function postQuestion(question) {
    if (!question) return
    if (question[1] >= 0) {
        const thequestion = question[0][language]
        const ans = question[1]
        questionConstainer.innerHTML = `
        <div class="question">${thequestion.question}</div>
        <div class="options">
            <div class="option" ${(thequestion.correctAnswer == 0)? 'style="background: #04dd71;"': (ans == 0 && ans != answer)?'style="background: #b8002a;"': ''  }data-id="0">${thequestion.options[0]}</div>
            <div class="option" ${(thequestion.correctAnswer == 1)? 'style="background: #04dd71;"': (ans == 1 && ans != answer)?'style="background: #b8002a;"': ''  } data-id="1">${thequestion.options[1]}</div>
            <div class="option" ${(thequestion.correctAnswer == 2)? 'style="background: #04dd71;"': (ans == 2 && ans != answer)?'style="background: #b8002a;"': ''  } data-id="2">${thequestion.options[2]}</div>
            <div class="option" ${(thequestion.correctAnswer == 3)? 'style="background: #04dd71;"': (ans == 3 && ans != answer)?'style="background: #b8002a;"': ''  } data-id="3">${thequestion.options[3]}</div>
        </div>
        `
    } else {
        const thequestion = question[language]
        questionConstainer.innerHTML = `
        <div class="question">${thequestion.question}</div>
        <div class="options">
            <div class="option" data-id="0">${thequestion.options[0]}</div>
            <div class="option" data-id="1">${thequestion.options[1]}</div>
            <div class="option" data-id="2">${thequestion.options[2]}</div>
            <div class="option" data-id="3">${thequestion.options[3]}</div>
        </div>
        `
        const optionElements = document.querySelectorAll(".option");
        optionElements.forEach((optionElement) => {
          optionElement.addEventListener("click", () => {
            optionElements.forEach((a) => {a.style.backgroundColor = "#eee";})
            optionElement.style.backgroundColor = "#ff8e00";
            answer = +optionElement.getAttribute('data-id')
            console.log(answer)
            nextBtn.removeAttribute('disabled')
          });
        });
    }
    return question
}
function generateQuestion() {
    const index = Math.floor(Math.random() * questions.length)
    randomQuestion = questions[index]
    questions.splice(index, 1)

}
    nextBtn.addEventListener('click', (e) => {
        if (questions.length === 0) {
            alert(`score: ${score}`)
        }
        if (prevLenght < previuos.length) {
            postQuestion(previuos[prevLenght])
            prevLenght++
        } else {
            if (answer || answer === 0) {
                const optionElements = document.querySelectorAll(".option");
                if (answer !== randomQuestion[language]['correctAnswer']) {
                    --score
                    optionElements.forEach((optionElement) => {
                        if (+optionElement.getAttribute('data-id') === randomQuestion[language].correctAnswer) {
                            optionElement.style.backgroundColor = "#04dd71";
                        } else if (+optionElement.getAttribute('data-id') === answer){
                            optionElement.style.backgroundColor = "#b8002a";
                        }
                    });
                } 
                optionElements.forEach((optionElement) => {
                    if (+optionElement.getAttribute('data-id') === randomQuestion[language].correctAnswer) {
                        optionElement.style.backgroundColor = "#04dd71";
                    }
                });
                setTimeout(() => {
                    previuos.push([randomQuestion, answer])
                    answer = null
                    generateQuestion()
                    postQuestion(randomQuestion)
                    prevLenght = previuos.length
                    console.log(previuos);
                    nextBtn.setAttribute('disabled', "")
                }, 1000)
            } else {
                postQuestion(randomQuestion)
                answer = null
                nextBtn.setAttribute('disabled', "")
            }
        }
    })
    document.getElementById('language').addEventListener("click", e => {
            if (language === 'arapic') {
                e.target.innerHTML = 'English';
                prevBtn.innerHTML = 'Previous'
                nextBtn.innerHTML = 'Next'
                language = 'english'
                postQuestion(randomQuestion)
                questionConstainer.style.direction = 'ltr'
            } else {
                e.target.innerHTML = 'العربية';
                nextBtn.innerHTML = 'التالي'
                prevBtn.innerHTML = 'السابق'
                language = 'arapic'
                questionConstainer.style.direction = 'rtl'
                postQuestion(randomQuestion)
            }
    })
    
    prevBtn.addEventListener("click", () => {
        answer = null
        if (prevLenght > 0) {
            nextBtn.removeAttribute('disabled')
            postQuestion(previuos[prevLenght - 1])
            --prevLenght
        } else {
            alert("هذا أول الامتحان")
        }
    })
    generateQuestion()
>>>>>>> 78307c141aa84fb38083730e7072989d62458806
    postQuestion(randomQuestion)