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
    {
        arapic: {
            question: "إذا أردت محاذاة للفقرة المحددة یسار تستخدم مفتاحى  Ctrl + x",
            options: ["صح", "خطأ"],
            correctAnswer: 1
        },
        english: {
            question: "If you want to align the selected paragraph to the left, use the Ctrl + x keys",
            options: ["True", "False"],
            correctAnswer: 1
        }
    },
    {
        arapic: {
            question: "أحدث إصدار نظام تشغیل من الإصدارات الآتیة هو  Windows 8.1",
            options: ["صح", "خطأ"],
            correctAnswer: 1
        },
        english: {
            question: "The latest operating system version of the following versions is Windows 8.1",
            options: ["True", "False"],
            correctAnswer: 1
        }
    },
    {
        arapic: {
            question: "كل ما یلى یعتبر من منافذ الكمبیوتر (Ports ) عدا  UPS",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "All of the following are considered computer ports (Ports) except UPS",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
        {
        arapic: {
            question: "لكى یحق استخدام أحد تطبیقات برامج الكمبیوتر لابد من توفر رخصة",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "In order to have the right to use a computer software application, a license must be available",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
    {
        arapic: {
            question: "وظیفة الباور سبلاى هى توصیل من خمسة إلى ١٢ فولت لكل أجزاء الكمبیوتر كل مكان حسب حاجته",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "The function of the power supply is to connect from five to 12 volts to all parts of the computer, every place according to its need",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
    {
        arapic: {
            question: "یتعرف نظام التشغیل على نوعیة الملفات من Extension",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "The operating system recognizes the file type from Extension",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
    {
        arapic: {
            question: "عند حذف ملف من الوسیط التخزینى فإنه یرسل إلى سلة المحذوفات فى حالة وجوده فى USP drive",
            options: ["صح", "خطأ"],
            correctAnswer: 1
        },
        english: {
            question: "When a file is deleted from the storage medium, it is sent to the Recycle Bin if it is in the USP drive.",
            options: ["True", "False"],
            correctAnswer: 1
        }
    },
    {
        arapic: {
            question: " یحتفظ الكمبیوتر بالمعلومات والبرامج التى تستخدم فى بدء التشغیل من خلال ذاكرة Hard disk",
            options: ["صح", "خطأ"],
            correctAnswer: 1
        },
        english: {
            question: "The computer maintains the information and programs that are used to start it through the hard disk memory",
            options: ["True", "False"],
            correctAnswer: 1
        }
    },
    {
        arapic: {
            question: "یمكن استدعاء المساعدة فى نظام التشغیل عن طریق F9",
            options: ["صح", "خطأ"],
            correctAnswer: 1
        },
        english: {
            question: "Help can be called up in the operating system via F9",
            options: ["True", "False"],
            correctAnswer: 1
        }
    },
    {
        arapic: {
            question: "یمكن أخذ صورة من الشاشة عن طریق Print screen",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "A picture can be taken from the screen via Print screen",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
    {
        arapic: {
            question: "لنقل رمز موجود على سطح المكتب باستخدام إجراء الفأرة Drag and Drop",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "Move an icon on the desktop using the Drag and Drop mouse action",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
    {
        arapic: {
            question: "للتحكم فى عرض المجلدات المخفیة نستخدم Folder option",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "To control the display of hidden folders, we use the Folder option",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
    {
        arapic: {
            question: "بایت واحد یعادل 8bit",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "One byte is equivalent to 8bit",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
    {
        arapic: {
            question: "لبیانات المخزنة باسم على القرص تسمى Drivers",
            options: ["صح", "خطأ"],
            correctAnswer: 1
        },
        english: {
            question: "The data stored under a name on the disk is called Drivers",
            options: ["True", "False"],
            correctAnswer: 1
        }
    },
    {
        arapic: {
            question: "بایت واحد یعادل لحفظ ملف نستخدم Save فقط",
            options: ["صح", "خطأ"],
            correctAnswer: 1
        },
        english: {
            question: "To save a file we just use Save",
            options: ["True", "False"],
            correctAnswer: 1
        }
    },
    {
        arapic: {
            question: "لملف الذى یتم تغییر شكله Folder",
            options: ["صح", "خطأ"],
            correctAnswer: 0
        },
        english: {
            question: "The file whose format is changed is Folder",
            options: ["True", "False"],
            correctAnswer: 0
        }
    },
]
const questionContainer = document.getElementById('question-constainer')
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("previous")
const resultContainer = document.getElementById("result-container")

let previuos = []
let prevLenght
let score = 0
let answer = null
let randomQuestion
let language = 'arapic'

function postQuestion(question) {
    if (!question) return
    if (question[1] >= 0) {
        const thequestion = question[0][language]
        const ans = question[1]
        const optionsHTML = thequestion.options
        .map((option, index) => {
            return `<div class="option" ${(thequestion.correctAnswer == index) ? 'style="background: #04dd71;"' : (ans == index && ans != answer) ? 'style="background: #b8002a;"' : ''} data-id="${index}">${option}</div>`;
        })
        .join('');
        questionContainer.innerHTML = `
        <div class="question">${thequestion.question}</div>
        <div class="options">${optionsHTML}</div>
    `;
    } else {
        const thequestion = question[language]
        const optionsHTML = thequestion.options
            .map((option, index) => {
                return `<div class="option" data-id="${index}">${option}</div>`;
            })
            .join('');
        questionContainer.innerHTML = `
            <div class="question">${thequestion.question}</div>
            <div class="options">${optionsHTML}</div>
        `;
        const optionElements = document.querySelectorAll(".option");
        optionElements.forEach((optionElement) => {
            optionElement.addEventListener("click", () => {
                optionElements.forEach((a) => { a.style.backgroundColor = "#eee"; })
                optionElement.style.backgroundColor = "#ff8e00";
                answer = +optionElement.getAttribute('data-id')
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
nextBtn.addEventListener('click',(e) => {
    if (answer === randomQuestion[language].correctAnswer) score++
    if (questions.length === 0) { 
        document.querySelector(".question-constainer").remove()
        percent = score * 100 / 32
        resultContainer.innerHTML = `
        <div class="container">
            <h1>النتيجة النهائية</h1>
            <h1 class="result">${percent}%</h1>
            <p>لقد حصلت على ${score} نقطة من 32 نقطة حيث يساوي ${percent}%</p>
            <p>حظاً موفقا ونتمنى لك النجاح دائما</p>
            <div class="re">
                <p>يمكنك دخول الإختبار مرة أًخرى بضغطك على <span>مرة أًخرى</span> في الأسفل</p>
                <button id="reload-btn">مرة أًخرى</button>
            </div>
        </div>
        `
        document.getElementById("reload-btn").addEventListener('click', () => location.reload())
    }
    if (prevLenght < previuos.length) {
        postQuestion(previuos[prevLenght])
        prevLenght++
    } else {
        if (answer || answer === 0) {
            const optionElements = document.querySelectorAll(".option");
            if (answer !== randomQuestion[language]['correctAnswer']) {
                
                optionElements.forEach((optionElement) => {
                    if (+optionElement.getAttribute('data-id') === randomQuestion[language].correctAnswer) {
                        optionElement.style.backgroundColor = "#04dd71";
                    } else if (+optionElement.getAttribute('data-id') === answer) {
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
        questionContainer.style.direction = 'ltr'
    } else {
        e.target.innerHTML = 'العربية';
        nextBtn.innerHTML = 'التالي'
        prevBtn.innerHTML = 'السابق'
        language = 'arapic'
        questionContainer.style.direction = 'rtl'
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
postQuestion(randomQuestion)

function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
  
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }
let timer = 180
const timerDiv = document.querySelector('.timer') 

setInterval(() => {
    if (timer > 0) {
        timer--
        timerDiv.innerHTML = `
        <h1>${secondsToTime(timer)}</h1>
        `
        timerDiv.style.color = `rgb(${300 - timer}, 0, 0)`
        timerDiv.style.border = `3px solid rgb(${300 - timer}, 0, 0)`
    } else {
        document.querySelector(".question-constainer").remove()
        percent = score * 100 / 32
        resultContainer.innerHTML = `
        <div class="container">
            <h1>النتيجة النهائية</h1>
            <h1 class="result">${percent}%</h1>
            <p>لقد حصلت على ${score} نقطة من 32 نقطة حيث يساوي ${percent}%</p>
            <p>حظاً موفقا ونتمنى لك النجاح دائما</p>
            <div class="re">
                <p>يمكنك دخول الإختبار مرة أًخرى بضغطك على <span>مرة أًخرى</span> في الأسفل</p>
                <button id="reload-btn">مرة أًخرى</button>
            </div>
        </div>
        `
        document.getElementById("reload-btn").addEventListener('click', () => location.reload())
    }
}, 1000)