
/* tslint:disable */
export const script = {
  "s": [
    {
      "description": "תסריט לניהול שיחות מצד הפונה",
      "name": "פונה",
      "snippets": [
        {
          "name": "default",
          "steps": [
            {
              "goto": "intro",
              "uid": "a06dfaf7c2"
            },
            {
              "goto": "reporting-loop",
              "uid": "e9acb54132"
            },
            {
              "goto": "promotion",
              "uid": "7a26c4124f"
            },
            {
              "goto": "end-of-report",
              "uid": "346d2a3795"
            }
          ],
          "uid": "898235e117"
        },
        {
          "name": "intro",
          "steps": [
            {
              "do": {
                "cmd": "load_local_storage",
                "params": [
                  "record"
                ]
              },
              "uid": "85e1eca3bb"
            },
            {
              "switch": {
                "arg": "_existing_user",
                "cases": [
                  {
                    "match": "new",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "טוב שבאת,",
                            "ar": "ممتاز انك جيت/ي,",
                            "en": "How good of you to drop by,",
                            "es": "Qué bueno que viniste,",
                            "fr": "Merci de votre participation,",
                            "ru": "Как хорошо что вы здесь,"
                          }
                        },
                        "uid": "432fe8e599"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "התשובות שלך לכמה שאלות קצרות יעזרו מאוד במאמץ המשותף לעצור את התפרצות הקורונה",
                            "ar": "أجوبتك لشوية أسئلة قصيرة رح تساعد كثير بمسعانا المشترك لإيقاف إنتشار الكورونا",
                            "en": "Answering a few short questions would contribute a lot to our joint effort to stop the Corona outbreak",
                            "es": "Tus respuestas a algunas preguntas cortas nos ayudarán significativamente en el esfuerzo conjunto de detener el brote de coronavirus. ",
                            "fr": "Vos réponses à ces courtes questions nous aideront énormément dans notre  commun effort visant à arrêter la propagation du Coronavirus",
                            "ru": "Ваши ответы на несколько коротких вопросов очень помогут в совместных усилиях остановить вспышку Коронавируса"
                          }
                        },
                        "uid": "724fd9e1ce"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "אם זה בסדר, אבקש לדעת כמה פרטים אנונימיים לטובת המחקר",
                            "ar": "إذا ممكن, بدي أعرف شوية تفاصيل من أجل البحث",
                            "en": "We have a few anonymous questions for you, to help the research",
                            "es": "Si te parece, me gustaría saber algunos datos anónimos a favor de la investigación",
                            "fr": "Si cela vous convient, je souhaiterais prendre connaissance de quelques détails anonymes pour cette étude",
                            "ru": "Если Вы не против, мы попросим Вас заполнить анонимный отчет для научного исследования."
                          }
                        },
                        "uid": "c50fbc1b4d"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נתחיל בדיווח עבורך, בסופו יתאפשר גם דיווח עבור בני משפחה נוספים",
                            "ar": "أولا إستبيانك انت, ولاحقا ممكن تعبئة إستبيان لأشخاص آخرين من عائلتك",
                            "en": "Let's start with reporting how you are feeling. Later you can submit another report for your family members",
                            "es": "Empezaremos con tu informe, y después también será posible informar acerca de otros miembros de la familia",
                            "fr": "Commençons à remplir ce questionnaire sur votre état de santé. Vous aurez aussi la possibilité de le remplir pour d'autres membres de votre famille",
                            "ru": "Начнем с вопросов о Вашем здоровье. После этого Вы сможете также заполнить отчет и о других членах семьи."
                          }
                        },
                        "uid": "7fd1d1ea6d"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "הכי טוב כשכולם מדווחים על עצמם בכל יום",
                            "ar": "مُفضّل أن يقوم الجميع بتعبئة الإستبيان عن أنفسهم يوميًا",
                            "en": "The best way is to have each family member report how they are feeling every day",
                            "es": "Lo mejor es que todos informen sobre sí mismos cada día",
                            "fr": "Le mieux serait que chacun remplisse ce questionnaire chaque jour",
                            "ru": "Лучше всего когда каждый ежедневно заполняет анкету сам за себя"
                          }
                        },
                        "uid": "2af5c3ecb3"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "אבל אם זה לא מסתדר, אפשר להקריא להם את השאלות או פשוט לענות בשמם",
                            "ar": "لكن إذا كان صعب, ممكن تقرأ/ي لهم الأسئلة أو ببساطة أن تُجيب/ي بإسمهم",
                            "en": "Or, if it's more convenient, you can read them the questions or just answer for them",
                            "es": "Pero si no es posible, puedes leerles las preguntas o responder en su lugar",
                            "fr": "Mais si cela ne convient pas, vous pouvez leur lire les questions ou simplement répondre en leur nom",
                            "ru": "Но если не получается, вы можете зачитать им вопросы или просто заполнить за них"
                          }
                        },
                        "uid": "82dee13fa2"
                      }
                    ],
                    "uid": "804186b089"
                  },
                  {
                    "match": "returning",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "הי! טוב לראותך שוב",
                            "ar": "مرحبا! مبسوطين برجعتك",
                            "en": "Hi! Nice to see you here again",
                            "es": "Hola, ¡qué bueno verte de nuevo!",
                            "fr": "Bonjour ! Ravi de vous revoir",
                            "ru": "Здравствуйте, рады вас снова видеть!"
                          }
                        },
                        "uid": "a4f3f4c1ff"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "הדיווחים שלך ושל אחרים עוזרים לנו מאוד במחקר ובניסיון להיאבק בקורונה",
                            "ar": "إستباينك وإستبيانات الآخرين بتساعدنا كثير بالبحث وبمحاولة محاربة الكورونا",
                            "en": "The reports that you and others have submitted go a long way to support the research and the battle against the Corona Virus",
                            "es": "Tu informe y el de los demás nos ayudan mucho en la investigación y en el intento de combatir el coronavirus",
                            "fr": "Vos rapports et ceux des autres nous aident énormément dans la recherche et la lutte contre le Corona",
                            "ru": "Ваши отчеты и отчеты других очень помогают нам в исследовании и попытке борьбы с Коронавирусом"
                          }
                        },
                        "uid": "a128f62aa8"
                      }
                    ],
                    "uid": "5c21180fea"
                  }
                ]
              },
              "uid": "61e348b15f"
            }
          ],
          "uid": "ec80178184"
        },
        {
          "name": "reporting-loop",
          "steps": [
            {
              "do": {
                "cmd": "clear"
              },
              "uid": "1ae1bd84b2"
            },
            {
              "goto": "personal-details",
              "uid": "d4cbb25f4e"
            },
            {
              "goto": "preconditions-check",
              "uid": "df5de41a13"
            },
            {
              "goto": "covid19-checks",
              "uid": "48accaa909"
            },
            {
              "goto": "insulation",
              "uid": "699a47659b"
            },
            {
              "goto": "current-report",
              "uid": "9def4af95e"
            },
            {
              "goto": "exposures",
              "uid": "56cb1f9459"
            },
            {
              "say": {
                ".tx": {
                  "_": "זהו, סיימנו את הדיווח עבור {{alias}}",
                  "ar": "أنهينا تعبئة الإستبيان ل{{alias}}",
                  "en": "You're done submitting a form for {{alias}}",
                  "es": "Listo, hemos finalizado el informe acerca de  {{alias}}",
                  "fr": "C'est tout, nous avons fini ce questionnaire pour {{alias}}",
                  "ru": "Всё, закончили отчёт о {{alias}}"
                }
              },
              "uid": "a2c9757617"
            },
            {
              "do": {
                "cmd": "save_report",
                "params": [
                  "record"
                ]
              },
              "uid": "70b6831d1c"
            },
            {
              "goto": "reporting-loop",
              "uid": "76a36a5d14"
            }
          ],
          "uid": "5002ab217a"
        },
        {
          "name": "personal-details",
          "steps": [
            {
              "do": {
                "cmd": "load_local_storage",
                "params": [
                  "record"
                ]
              },
              "uid": "3dd65136eb"
            },
            {
              "switch": {
                "arg": "_existing_user",
                "cases": [
                  {
                    "match": "new"
                  },
                  {
                    "match": "returning",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "עבור מי ברצונך לדווח עכשיו?",
                            "ar": "لمين بدك تقوم/ي بتعبئة الإستبيان؟",
                            "en": "Whose health would you like to report about next? ",
                            "es": "¿Sobre quién deseas informar ahora?",
                            "fr": "Pour qui souhaitez-vous remplir ce questionnaire maintenant ?",
                            "ru": "За кого вы хотите заполнить отчет?"
                          }
                        },
                        "uid": "4c16166fd3"
                      },
                      {
                        "do": {
                          "cmd": "fetch_previous_reports",
                          "params": [
                            {
                              ".tx": {
                                "_": "דיווח חדש ב{{street}} {{city_town}}",
                                "ar": "تعبئة إستبيان جديد ب {{street}} مدينة {{city_town}}",
                                "en": "a new report in {{street}}, in {{city_town}}",
                                "es": "Nuevo informe en {{street}} {{city_town}}",
                                "fr": "Nouveau rapport de {{street}} {{city_town}}",
                                "ru": "Новый отчёт, с улицы {{street}} в городе {{city_town}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "דיווח חדש בכתובת אחרת",
                                "ar": "إستبيان جديد بمكان سكن آخر",
                                "en": "New report for a different address",
                                "es": "Nuevo informe en otra dirección",
                                "fr": "Nouveau rapport pour une adresse différente",
                                "ru": "Новый отчёт по другому адресу"
                              }
                            },
                            {
                              ".tx": {
                                "_": "כל בני ביתי כבר דיווחו",
                                "ar": "جميع سكان منزلي قاموا بتعبئة الإستبيان",
                                "en": "Everyone in my household has reported",
                                "es": "Todos los residentes de mi casa ya han informado",
                                "fr": "Toutes les personnes avec lesquelles j'habite ont déjà remplies le questionnaire",
                                "ru": "Все члены семьи уже доложили."
                              }
                            }
                          ],
                          "variable": "_report_options"
                        },
                        "uid": "7c2d53066c"
                      },
                      {
                        "uid": "ef57e0c78d",
                        "wait": {
                          "optionsFrom": "_report_options",
                          "variable": "_report_selection"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_report_selection"
                          ]
                        },
                        "uid": "6b87cca59d"
                      }
                    ],
                    "uid": "8cc3349ed1"
                  }
                ]
              },
              "uid": "92054d1361"
            },
            {
              "switch": {
                "arg": "sex",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "בן? בת?",
                            "ar": "ذكر؟ أنثى؟",
                            "en": "Male? Female?",
                            "es": "¿Hombre? ¿Mujer?",
                            "fr": "Homme ? Femme ? ",
                            "ru": "Женщина или мужчина?"
                          }
                        },
                        "uid": "289a7b45d8"
                      },
                      {
                        "uid": "2a490b8fb3",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "בן",
                                  "ar": "ذكر",
                                  "en": "Male",
                                  "es": "Hombre",
                                  "fr": "Homme",
                                  "ru": "Мужчина"
                                }
                              },
                              "value": "male"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "בת",
                                  "ar": "أنثى",
                                  "en": "Female",
                                  "es": "Mujer",
                                  "fr": "Femme",
                                  "ru": "Женщина"
                                }
                              },
                              "value": "female"
                            }
                          ],
                          "variable": "sex"
                        }
                      }
                    ],
                    "uid": "b56d6cc89e",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "26ba900515"
            },
            {
              "switch": {
                "arg": "age",
                "cases": [
                  {
                    "steps": [
                      {
                        "switch": {
                          "arg": "sex",
                          "cases": [
                            {
                              "match": "male",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בן כמה?",
                                      "ar": "عُمره؟",
                                      "en": "How many years old?",
                                      "es": "¿Cuántos años tienes?",
                                      "fr": "Votre âge ?",
                                      "ru": "Ваш возраст"
                                    }
                                  },
                                  "uid": "1fb50d3ac9"
                                }
                              ],
                              "uid": "afe829864e"
                            },
                            {
                              "match": "female",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בת כמה?",
                                      "ar": "عمرها؟",
                                      "en": "How many years old?",
                                      "es": "¿Cuántos años tienes?",
                                      "fr": "Votre âge ?",
                                      "ru": "Ваш возраст"
                                    }
                                  },
                                  "uid": "c8e292635e"
                                }
                              ],
                              "uid": "708094b8ce"
                            }
                          ]
                        },
                        "uid": "78d963404b"
                      },
                      {
                        "uid": "7d99d320f0",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 120,
                          "input-min": 0,
                          "placeholder": {
                            ".tx": {
                              "_": "גיל, 0-120",
                              "ar": "جيل، 0-120",
                              "en": "Age, 0-120",
                              "es": "Edad, 0-120",
                              "fr": "Âge, 0-120",
                              "ru": "Возраст, 0-120"
                            }
                          },
                          "variable": "age"
                        }
                      }
                    ],
                    "uid": "63516f048e",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "7394293f03"
            },
            {
              "switch": {
                "arg": "city_town",
                "cases": [
                  {
                    "steps": [
                      {
                        "do": {
                          "cmd": "prepare_city_town_suggestions",
                          "variable": "_cityTownSuggestions"
                        },
                        "uid": "b9d21cf202"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "מה הוא מקום המגורים?",
                            "ar": "شو مكان السكن؟",
                            "en": "Where do you live?",
                            "es": "¿En dónde vives?",
                            "fr": "Votre lieu de résidence ?",
                            "ru": "Где вы проживаете?"
                          }
                        },
                        "uid": "4c0abfecc9"
                      },
                      {
                        "uid": "174bb25fa7",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם העיר או הישוב",
                              "ar": "إسم المدينة أو القرية",
                              "en": "Place of residence",
                              "es": "Nombre de la ciudad o la localidad",
                              "fr": "Nom de la ville ou de la localité",
                              "ru": "Название города или поселка"
                            }
                          },
                          "suggestionsFrom": "_cityTownSuggestions",
                          "variable": "city_town"
                        }
                      }
                    ],
                    "uid": "f23bac57b1",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "2ec0cb0fbb"
            },
            {
              "switch": {
                "arg": "street",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "שם הרחוב?",
                            "ar": "إسم الشارع؟",
                            "en": "Street name?",
                            "es": "¿En qué calle?",
                            "fr": "Nom de la rue ?",
                            "ru": "Название улицы?"
                          }
                        },
                        "uid": "2966b83d86"
                      },
                      {
                        "uid": "4fdca8e817",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם הרחוב, אם ידוע",
                              "ar": "إسم الشارع، إذا معروف",
                              "en": "Street name, if known",
                              "es": "Nombre de la calle, si se sabe",
                              "fr": "Nom de la rue, s'il est connu",
                              "ru": "Название улицы, если известно"
                            }
                          },
                          "required": false,
                          "variable": "street"
                        }
                      }
                    ],
                    "uid": "ced2bd1fc2",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "94b2b8dad7"
            },
            {
              "switch": {
                "arg": "alias",
                "cases": [
                  {
                    "steps": [
                      {
                        "do": {
                          "cmd": "calculate_alias",
                          "params": [
                            "record",
                            {
                              ".tx": {
                                "_": "בן {{age}} מ{{street}} {{city_town}}",
                                "ar": "إبن الـ {{age}} من {{street}} مدينة {{city_town}}",
                                "en": "{{age}} years old male from {{street}} {{city_town}}",
                                "es": "{{age}} años de {{street}} {{city_town}}",
                                "fr": "{{age}} ans de {{street}} {{city_town}}",
                                "ru": "{{age}} лет, с улицы {{street}} в городе {{city_town}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "בת {{age}} מ{{street}} {{city_town}}",
                                "ar": "إبنة الـ {{age}} من {{street}} مدينة {{city_town}}",
                                "en": "{{age}} years old female from {{street}} {{city_town}}",
                                "es": "{{age}} años de {{street}} {{city_town}}",
                                "fr": "{{age}} ans de {{street}} {{city_town}}",
                                "ru": "{{age}} лет, с улицы {{street}} в городе {{city_town}}"
                              }
                            }
                          ],
                          "variable": "alias"
                        },
                        "uid": "8b55168adb"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נהדר, בכדי לשמור על הפרטיות שלך, בדיווחים הבאים נקרא לך פשוט {{alias}}",
                            "ar": "ممتاز, من أجل المحافظة على خصوصيتك, في المرات القادمة سوف نسميك {{alias}}",
                            "en": "Great. In the interest of privacy, in your following daily reports we'll address you as  {{alias}}",
                            "es": "Excelente, para preservar tu privacidad, en los próximos informes, te llamaremos simplemente  {{alias}}",
                            "fr": "Parfait, afin de protéger votre confidentialité, dans les prochains questionnaires, nous vous appellerons simplement {{alias}}",
                            "ru": "Отлично. Чтобы сохранить вашу конфиденциальность, в следующих отчетах мы просто вас будем называть {{alias}}"
                          }
                        },
                        "uid": "bf62d4b8ec"
                      }
                    ],
                    "uid": "1baea83011",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "65a50a6980"
            },
            {
              "do": {
                "cmd": "is_adult",
                "params": [
                  "record"
                ],
                "variable": "_is_adult"
              },
              "uid": "32853d136a"
            },
            {
              "do": {
                "cmd": "fetch_household_data",
                "params": [
                  "record"
                ]
              },
              "uid": "895892c2cc"
            },
            {
              "switch": {
                "arg": "_household_data_available",
                "cases": [
                  {
                    "match": true
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "יש לנו כמה שאלות (שנשאל פעם אחת) לגבי הבית ב{{street}} {{city_town}} -",
                            "ar": "في كم سؤال (بدنا نسألهن مرة واحدة فقط) بالنسبة للبيت بـ {{street}} في مدينة {{city_town}} -",
                            "en": "We have some questions (which we will ask just once) about the house on  {{street}}, {{city_town}}",
                            "es": "Tenemos algunas preguntas (solo por esta vez) sobre la casa en {{street}} {{city_town}}",
                            "fr": "Nous avons quelques questions (que nous ne poserons qu'une seule fois) concernant la maison située {{street}} {{city_town}}",
                            "ru": "У нас есть несколько вопросов (которые больше не будем повторять) про {{street}} {{city_town}} "
                          }
                        },
                        "uid": "621928ce03"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "כמה מבוגרים מעל לגיל 18 גרים בבית?",
                            "ar": "عدد الأشخاص البالغين فوق جيل ال 18 يسكنون في البيت؟",
                            "en": "How many adults over 18 years old live in the house?",
                            "es": "¿Cuántos de ellos son mayores de 18 años viven en la casa?",
                            "fr": "Combien d'adultes de plus de 18 ans vivent dans le foyer ?",
                            "ru": "Сколько взрослых старше 18 лет живут в доме?"
                          }
                        },
                        "uid": "8a0382e6c1"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "b9df1b176f",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 1,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר המבוגרים ,1-99",
                                        "ar": " عدد الأشخاص البالغين, 1-99",
                                        "en": "Number of adults, 1-99",
                                        "es": "Cantidad de adultos, 1-99",
                                        "fr": "Nombre d'adultes, 1-99",
                                        "ru": "Количество взрослых, 1-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_adults"
                                  }
                                }
                              ],
                              "uid": "5ba08ebdef"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "9ddb38850f",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 0,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר המבוגרים ,0-99",
                                        "ar": "عدد الأشخاص البالغين, 0-99",
                                        "en": "Number of adults, 0-99",
                                        "es": "Cantidad de adultos, 0-99",
                                        "fr": "Nombre d'adultes, 0-99",
                                        "ru": "Количество взрослых, 0-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_adults"
                                  }
                                }
                              ],
                              "uid": "4e36d11757"
                            }
                          ]
                        },
                        "uid": "3c567f5b5b"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "וכמה ילדים מתחת לגיל 18?",
                            "ar": "عدد الأطفال تحت جيل 18؟",
                            "en": "And how many children under 18?",
                            "es": "¿ y cuántos menores de 18 años?",
                            "fr": "Et combien d'enfants de moins de 18 ans ?",
                            "ru": "А сколько детей до 18 лет?"
                          }
                        },
                        "uid": "cadc9957e0"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "b4ae1ceaaa",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 0,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר הילדים, 0-99",
                                        "ar": "عدد الأطفال, 0-99",
                                        "en": "Number of children, 0-99",
                                        "es": "Cantidad de niños, 0-99",
                                        "fr": "Nombre d'enfants, 0-99",
                                        "ru": "Количество детей, 0-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_minors"
                                  }
                                }
                              ],
                              "uid": "0c96d5c98c"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "72f2ec1bbb",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 1,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר הילדים, 1-99",
                                        "ar": "عدد الأطفال, 1-99",
                                        "en": "Number of children, 1-99",
                                        "es": "Cantidad de niños, 1-99",
                                        "fr": "Nombre d'enfants, 1-99",
                                        "ru": "Количество детей, 1-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_minors"
                                  }
                                }
                              ],
                              "uid": "7a718c6c40"
                            }
                          ]
                        },
                        "uid": "f5416b3eb6"
                      }
                    ],
                    "uid": "1e14d30084"
                  }
                ]
              },
              "uid": "6409f67795"
            },
            {
              "switch": {
                "arg": "_is_adult",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "medical_staff_member",
                          "cases": [
                            {
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "האם העבודה שלך היא כחלק מצוות רפואי- בטיפול בחולים או בקבלת קהל?",
                                      "ar": "في عملك، هل انت جزء من فريق طبي - الذي يعتني بمرضى أو يستقبل جمهور؟",
                                      "en": "Are you part of a health-care team, treating patients or receiving them?",
                                      "es": "¿Formas parte de un equipo médico, atendiendo pacientes o brindando atención al público?",
                                      "fr": "Faites vous partie d'une équipe médicale dans le cadre de votre travail ? Soignez-vous ou recevez-vous des patients ?",
                                      "ru": "Работаете ли вы как медицинский персонал (уход за больными или прием публики)?"
                                    }
                                  },
                                  "uid": "f21abaa60d"
                                },
                                {
                                  "uid": "a193745d13",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "כן, אני חלק מצוות רפואי",
                                            "ar": "نعم, أنا من ضمن فريق طبي",
                                            "en": "Yes, I am a health-care professional",
                                            "es": "Sí, formo parte de un equipo médico",
                                            "fr": "Oui, je fais partie d'une équipe médicale",
                                            "ru": "Да, я часть медицинского персонала."
                                          }
                                        },
                                        "value": "true"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא, אני לא",
                                            "ar": "لا, لستُ كذلك",
                                            "en": "No, I'm not",
                                            "es": "No, yo no",
                                            "fr": "Non, je n'en fais pas partie",
                                            "ru": "Нет, я не часть медицинского персонала"
                                          }
                                        },
                                        "value": "false"
                                      }
                                    ],
                                    "variable": "medical_staff_member"
                                  }
                                }
                              ],
                              "uid": "fd54eca6a5",
                              "undefined": true
                            },
                            {
                              "default": true
                            }
                          ]
                        },
                        "uid": "bfe332a80b"
                      }
                    ],
                    "uid": "688c92f408"
                  }
                ]
              },
              "uid": "6379bd7362"
            }
          ],
          "uid": "ab5b28894d"
        },
        {
          "name": "preconditions-check",
          "steps": [
            {
              "switch": {
                "arg": "preconditions_received",
                "cases": [
                  {
                    "steps": [
                      {
                        "goto": "preconditions",
                        "uid": "2ee9cfe009"
                      }
                    ],
                    "uid": "b5f4a25217",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "be6509b6cd"
            }
          ],
          "uid": "7aebde456b"
        },
        {
          "name": "preconditions",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "אשאל אותך על מחלות, שחשוב לנו לדעת אם אובחנו אצלך בעבר או שיש לך כיום:",
                  "ar": "بدي أسألك عن أمراض, اللي مهم لإلنا نعرف إذا تم تشخيصك بأي منها الآن أو في السابق:",
                  "en": "I'm going to ask about diseases, it's important to know whether you were diagnosed with them in the past and/or you are suffering from them now:",
                  "es": "Te preguntaré sobre algunas enfermedades, que es importante que sepamos si te las han diagnosticado en el pasado:",
                  "fr": "Je vais vous poser des questions sur différentes maladies, et il est important pour nous de savoir si vous avez été diagnostiqué dans le passé ou si vous en souffrez aujourd'hui:",
                  "ru": "Мы бы хотели задать вопрос о болезнях, которые были у вас диагностированы, в прошлом или в настоящем:"
                }
              },
              "uid": "6861e5ea76"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "2e29f0c171"
            },
            {
              "goto": "preconditions-smoking",
              "uid": "c3bd210c40"
            },
            {
              "do": {
                "cmd": "set_flag",
                "params": [
                  "record",
                  "preconditions_received"
                ]
              },
              "uid": "8159f08bcb"
            },
            {
              "say": {
                ".tx": {
                  "_": "אוקיי, עברנו את זה...",
                  "ar": "أوكي, مرقنا..",
                  "en": "OK, we're done with that...",
                  "es": "OK, lo pasamos... ",
                  "fr": "D'accord, nous en avons fini avec ça...",
                  "ru": "Так, это мы прошли..."
                }
              },
              "uid": "2969e1a444"
            }
          ],
          "uid": "d96a2bfad6"
        },
        {
          "name": "preconditions-diseases",
          "steps": [
            {
              "uid": "8188eb0451",
              "wait": {
                "multi": true,
                "options": [
                  {
                    "field": "precondition_chronic_diabetes",
                    "show": {
                      ".tx": {
                        "_": "סוכרת",
                        "ar": "سُكري",
                        "en": "Diabetes",
                        "es": "Diabetes",
                        "fr": "Diabète",
                        "ru": "Диабет"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_hypertension",
                    "show": {
                      ".tx": {
                        "_": "בעיית יתר לחץ דם",
                        "ar": "مشكلة ضغط دم عالي",
                        "en": "Hypertension",
                        "es": "Hipertensión arterial",
                        "fr": "Problème d'hypertension",
                        "ru": "Высокое давление"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_ischemic_heart_disease_or_stroke",
                    "show": {
                      ".tx": {
                        "_": "מחלת לב, כלי דם או שבץ",
                        "ar": "أمراض قلب, أوعية دموية أو جلطة",
                        "en": "Coronary artery disease, stroke or Cardiovascular disease",
                        "es": "Enfermedades del corazón, vasos sanguíneos o derrames cerebrales",
                        "fr": "Maladie cardiaque, artérielle ou AVC",
                        "ru": "Сердечно-сосудистое заболевание или инсульт"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_lung_disease",
                    "show": {
                      ".tx": {
                        "_": "מחלת ריאות כרונית כולל אסתמה (ללא אסתמה בילדות)",
                        "ar": "مرض مُزمن بالرئات يشمل ربو - אסתמה (بإستثناء ربو بالطفولة) ",
                        "en": "Chronic pulmonary disease including asthma (not including childhood asthma)",
                        "es": "Enfermedad pulmonar crónica incluyendo asma (sin asma en la infancia)",
                        "fr": "Maladie pulmonaire chronique, y compris l'asthme (sans asthme infantile)",
                        "ru": "Хроническая болезнь легких, включая астму (но не детскую астму)"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_cancer",
                    "show": {
                      ".tx": {
                        "_": "סרטן",
                        "ar": "سرطان",
                        "en": "Cancer",
                        "es": "Cáncer",
                        "fr": "Cancer",
                        "ru": "Рак"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_kidney_failure",
                    "show": {
                      ".tx": {
                        "_": "אי ספיקת כליות",
                        "ar": "قصور كلوي",
                        "en": "Renal failure",
                        "es": "Insuficiencia renal",
                        "fr": "Insuffisance rénale",
                        "ru": "Почечная недостаточность"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_immune_system_suppression",
                    "show": {
                      ".tx": {
                        "_": "דיכוי חיסוני לרבות נטילת תרופות המדכאות את מערכת החיסון",
                        "ar": "نقص بالمناعة يشمل إستخدام أدوية اللي تُضعف جهاز المناعة",
                        "en": "Immunosupression, including taking immunosuppressant drugs",
                        "es": "Inmunosupresión incluyendo el consumo de remedios que inhiben el sistema inmunológico",
                        "fr": "Immunodéficience, y compris la prise de médicaments immunosupresseurs",
                        "ru": "Иммуносупрессия, включая прием лекарств, подавляющих иммунную систему"
                      }
                    }
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "<span class='empty'>אף אחת ממחלות הרקע הללו</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>ללא מחלות רקע</span>",
                        "ar": "<span class='empty'>ولا أي واحد من هاي الأمراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد أمراض</span>",
                        "en": "<span class='empty'>None of these diseases</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>None of these diseases</span>",
                        "es": "<span class='empty'>Ninguna de estas enfermedades</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay enfermedades previas</span>",
                        "fr": "<span class='empty'>Aucun des ces antécédents médicaux</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'antécédents médicaux </span>",
                        "ru": "<span class='empty'>Ни одного из этих фоновых заболеваний</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет фоновых заболеваний</span>"
                      }
                    }
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "update_from_selection",
                "params": [
                  "record",
                  "_var"
                ]
              },
              "uid": "d9eddffe93"
            }
          ],
          "uid": "56dc1eb702"
        },
        {
          "name": "preconditions-smoking",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "מה לגבי עישון?",
                  "ar": "شو مع التدخين؟",
                  "en": "How about smoking?",
                  "es": "¿Qué podemos decir sobre el fumar?",
                  "fr": "Fumez-vous ?",
                  "ru": "Как насчет курения?"
                }
              },
              "uid": "92a9456fa5"
            },
            {
              "uid": "cfb125483f",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "עישון יומיומי",
                        "ar": "تدخين بشكل يومي",
                        "en": "I smoke daily",
                        "es": "Fumo diariamente",
                        "fr": "Je fume quotidiennement ",
                        "ru": "ежедневное курение"
                      }
                    },
                    "value": "daily_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, הפסקתי לפני פחות מחמש שנים",
                        "ar": "دخنت في السابق, توقفت قبل أقل من خمس سنين",
                        "en": "I smoked in the past, stopped less than 5 years ago",
                        "es": "Fumé en el pasado, dejé hace menos de cinco años",
                        "fr": "J'ai fumé dans le passé, j'ai arrêté il y a moins de cinq ans",
                        "ru": "Я курил/а раньше, бросил/а менее пяти лет назад"
                      }
                    },
                    "value": "short_past_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, לפני יותר מחמש שנים",
                        "ar": "دخنت في السابق, قبل أكثر من خمس سنين",
                        "en": "I smoked in the past, more than 5 years ago",
                        "es": "Fumé en el pasado, hace más de cinco años",
                        "fr": "J'ai fumé dans le passé, il y a plus de cinq ans",
                        "ru": "Я курил/а раньше, бросил/а более пяти лет назад"
                      }
                    },
                    "value": "long_past_smokre"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "אף פעם",
                        "ar": "ولا مرة",
                        "en": "Never",
                        "es": "Nunca",
                        "fr": "Jamais",
                        "ru": "Никогда"
                      }
                    },
                    "value": "never"
                  }
                ],
                "variable": "precondition_smoking"
              }
            }
          ],
          "uid": "397469aff5"
        },
        {
          "name": "covid19-checks",
          "steps": [
            {
              "do": {
                "cmd": "fetch_covid19_check_question_data",
                "params": [
                  "record"
                ]
              },
              "uid": "ed8f4f179e"
            },
            {
              "switch": {
                "arg": "_covid19_check_question_status",
                "cases": [
                  {
                    "match": "missing_result",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "סיפרת לנו בדיווח קודם שנבדקת לקורונה... האם כבר קיבלת את תוצאות הבדיקה?",
                            "ar": "في آخر إستبيان ذكرت/ي انك قمت/ي بفحص للكورونا.. هل وصلتك نتيجة الفحص؟",
                            "en": "You told us in a previous report that you had a covid-19 test... Have you received the results?",
                            "fr": "Vous nous avez dit dans un précédent rapport que vous aviez été testé pour le Corona ... Avez-vous déjà reçu les résultats des tests?",
                            "ru": "В прошлом отчёте вы рассказали нам, что прошли тест на Коронавирус. Вы уже получили результаты теста?"
                          }
                        },
                        "uid": "bfb279ebba"
                      },
                      {
                        "uid": "2b939bd7e7",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, הגיעו תוצאות הבדיקה",
                                  "ar": "نعم, وصلت نتائج الفحص",
                                  "en": "Yes, the test results have been received",
                                  "fr": "Oui, j'ai reçu les résultats du test",
                                  "ru": "Да, я получил/а результаты теста"
                                }
                              },
                              "steps": [
                                {
                                  "goto": "covid19_check_ask_for_results",
                                  "uid": "613d8a6418"
                                }
                              ],
                              "uid": "8bac95e267"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "fr": "Non",
                                  "ru": "Нет"
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "fa2feaef18"
                  },
                  {
                    "match": "first_time",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם נבדקת כחולה בקורונה בעבר (בדיקת PCR)?",
                            "ar": "هل تم فحصك في السابق للكورونا (فحص PCR)؟",
                            "en": "Have you been tested for Covid-19 in the past (PCR test)?",
                            "fr": "Avez-vous déjà été testé pour le Corona (test PCR) ?",
                            "ru": "Проходили ли вы тест на Коронавирус (тест PCR)?"
                          }
                        },
                        "uid": "6958a0181a"
                      },
                      {
                        "uid": "c19f8f2009",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, נבדקתי",
                                  "ar": "نعم, تم فحصي",
                                  "en": "Yes, I have been tested",
                                  "fr": "Oui, j'ai été testé",
                                  "ru": "Да, я проходил/а тест"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה תאריך נבדקת בפעם האחרונה?",
                                      "ar": "في أي تاريخ تم فحصك آخر مرة؟",
                                      "en": "On what date were you last tested?",
                                      "fr": "À quelle date avez-vous été testé pour la dernière fois ?",
                                      "ru": "Какого числа вы проходили тест в последний раз?"
                                    }
                                  },
                                  "uid": "eded8e503d"
                                },
                                {
                                  "uid": "257fa2bd4f",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "covid19_check_date"
                                  }
                                },
                                {
                                  "goto": "covid19_check_ask_for_results",
                                  "uid": "35a29ae04f"
                                }
                              ],
                              "uid": "3e7aa9825b",
                              "value": true
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "fr": "Non",
                                  "ru": "Нет"
                                }
                              },
                              "value": false
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "f2f17b24a0"
                  },
                  {
                    "match": "ask_again",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם נבדקת בשבוע האחרון לקורונה, בבדיקת PCR?",
                            "ar": "هل تم فحصك في آخر أسبوع للكورونا, بفحص PCR؟",
                            "en": "Have you had a PCR test for Covid-19 during the last week?",
                            "fr": "Avez-vous été testé pour le Corona au cours des 7 derniers jours par un test PCR ?",
                            "ru": "Проходили ли вы тест на Коронавирус (тест PCR) на последней неделе?"
                          }
                        },
                        "uid": "d1903e3e90"
                      },
                      {
                        "uid": "bb025a776a",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, נבדקתי",
                                  "ar": "نعم, تم فحصي",
                                  "en": "Yes, I have been tested",
                                  "fr": "Oui, j'ai été testé",
                                  "ru": "Да, я проходил/а тест"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה יום זה היה?",
                                      "ar": "في أي يوم كان؟",
                                      "en": "On what date was that?",
                                      "fr": "Quel jour était-ce ?",
                                      "ru": "Какого числа это было?"
                                    }
                                  },
                                  "uid": "80998916b5"
                                },
                                {
                                  "uid": "f55c6653bd",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "covid19_check_date"
                                  }
                                },
                                {
                                  "goto": "covid19_check_ask_for_results",
                                  "uid": "8e94f82d72"
                                }
                              ],
                              "uid": "23926bc6b9"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "fr": "Non",
                                  "ru": "Нет"
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "7def56da3b"
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "037a48da5c"
            },
            {
              "do": {
                "cmd": "save_covid19_check_question_data",
                "params": [
                  "record"
                ]
              },
              "uid": "786b8f8efc"
            }
          ],
          "uid": "6d5b3a0ef7"
        },
        {
          "name": "covid19_check_ask_for_results",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "ומה היתה תוצאת הבדיקה?",
                  "ar": "وما هي نتيجة الفحص؟",
                  "en": "What were the results of the test?",
                  "fr": "Et quel a été le résultat du test ?",
                  "ru": "И каков был результат теста?"
                }
              },
              "uid": "081522dd2c"
            },
            {
              "uid": "37123efe69",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "אובחנתי כחולה בקורונה",
                        "ar": "تم تشخيصي كمريض كورونا",
                        "en": "I was diagnosed as having Covid-19",
                        "fr": "Je suis malade du Corona",
                        "ru": "Тест установил, что я болею Коронавирусом."
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "אוי, זה בטח לא פשוט.  החלמה מהירה",
                            "ar": "آسفين نسمع, طبعًا مكانش سهل. منتمنى لك الشفاء العاجل",
                            "en": "Sorry to hear it. We wish you a speedy recovery.",
                            "fr": "Oh, cela ne doit pas être facile. Bon rétablissement",
                            "ru": "Ой, это, наверно, очень неприятно. Желаем скорейшего выздоровления."
                          }
                        },
                        "uid": "7cdcb069c0"
                      }
                    ],
                    "uid": "8d2d7cbb33",
                    "value": "positive"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "אין לי קורונה",
                        "ar": "لا يوجد لدي كورونا",
                        "en": "I don't have Covid-19",
                        "fr": "Je ne suis pas malade du Corona",
                        "ru": "Я не болею Коронавирусом"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "משמח לשמוע, נקווה שימשיך ככה",
                            "ar": "بيسعدنا نسمع, منتمنى أنه يكمل هيك",
                            "en": "That's good news; let's hope it stays like that",
                            "fr": "Heureux de l'entendre, espérons que ça continue comme ça",
                            "ru": "Рады слышать. Будьте здоровы и дальше."
                          }
                        },
                        "uid": "fc3d72fa84"
                      }
                    ],
                    "uid": "6151e31239",
                    "value": "negative"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עוד לא קיבלתי את תוצאות הבדיקה",
                        "ar": "حتى الآن لم تصلني نتائج الفحص",
                        "en": "I haven't received the test results yet",
                        "fr": "Je n'ai pas encore reçu les résultats du test",
                        "ru": "Я ещё не получил/а результаты теста"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "אנחנו מחזיקים לך אצבעות",
                            "ar": "منتمنى أنه يكون خير",
                            "en": "We're keeping our fingers crossed for you",
                            "fr": "Nous croisons les doigts pour vous",
                            "ru": "Надеемся, что все у вас будет хорошо"
                          }
                        },
                        "uid": "406eddbf9b"
                      }
                    ],
                    "uid": "c42d095ea4",
                    "unless": "_covid19_check_question_status_missing",
                    "value": "result_missing"
                  }
                ],
                "variable": "_covid19_check_result"
              }
            }
          ],
          "uid": "12c2bc384d"
        },
        {
          "name": "insulation",
          "steps": [
            {
              "switch": {
                "arg": "exposure_status",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "עכשיו, מה בנוגע לבידוד?",
                            "ar": " الآن, شو بالنسبة للحجر الصحي؟",
                            "en": "Now, what about quarantine?",
                            "es": "Ahora, ¿qué nos puedes decir respecto al aislamiento?",
                            "fr": "Maintenant, qu'en est-il du confinement ?",
                            "ru": "А теперь, что насчет карантина?"
                          }
                        },
                        "uid": "940eefc1f9"
                      }
                    ],
                    "uid": "e7a358a104",
                    "undefined": true
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "exposure_status",
                          "cases": [
                            {
                              "pattern": "(insulation_with_family|insulation|diagnosed)",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "הדיווח הקודם היה על בידוד או אישפוז. האם משהו השתנה?",
                                      "ar": "آخر إستبيان كنت في الحجر الصحي أو تتعالج في المستشفى. في إشي تغير؟",
                                      "en": "Last time you reported quarantine or hospitalization. Did that change?",
                                      "es": "El informe anterior fue sobre aislamiento u hospitalización. ¿Algo de esto ha cambiado?",
                                      "fr": "Le rapport précédent mentionnait un confinement ou une hospitalisation. Est-ce que quelque chose a changé depuis ?",
                                      "ru": "В предыдущем отчете вы были на карантине или госпитализированы. Что-нибудь изменилось?"
                                    }
                                  },
                                  "uid": "f347774e64"
                                }
                              ],
                              "uid": "e18fd30513"
                            },
                            {
                              "default": true,
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בדיווח הקודם לא הוזכר בידוד או אשפוז. האם משהו השתנה?",
                                      "ar": "في آخر إستبيان لم يُذكر حجر صحي أو علاج في المستشفى. في إشي تغير؟",
                                      "en": "Last time you did not report quarantine or hospitalization. Did that change?",
                                      "es": "En el informe anterior no se mencionó aislamiento ni hospitalización. ¿Algo de esto ha cambiado?",
                                      "fr": "Aucun confinement ou hospitalisation n'avait été mentionné dans le rapport précédent. Est-ce que quelque chose a changé depuis ?",
                                      "ru": "В предыдущем отчете вы не упоминали карантин или госпитализацию. Что-нибудь изменилось? "
                                    }
                                  },
                                  "uid": "a10ed0436c"
                                }
                              ],
                              "uid": "6ec982ad50"
                            }
                          ]
                        },
                        "uid": "69743b3ca3"
                      },
                      {
                        "uid": "87f90cdcb4",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא, המצב דומה",
                                  "ar": "لا، الوضع مشابه",
                                  "en": "No, things are about the same",
                                  "es": "No, la situación es similar",
                                  "fr": "Non, la situation est similaire",
                                  "ru": "Нет, ситуация не изменилась"
                                }
                              }
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, משהו השתנה",
                                  "ar": "نعم، الوضع تغير",
                                  "en": "Yes, things have changed",
                                  "es": "Sí, algo ha cambiado",
                                  "fr": "Oui, la situation a changé",
                                  "ru": "Да, что-то изменилось"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אז מה השתנה?",
                                      "ar": "وشو تغير؟",
                                      "en": "So what has changed?",
                                      "es": "¿Qué ha cambiado?",
                                      "fr": "Alors qu'est-ce qui a changé ?",
                                      "ru": "И что нового?"
                                    }
                                  },
                                  "uid": "bf3ed6cbac"
                                },
                                {
                                  "do": {
                                    "cmd": "clear_fields",
                                    "params": [
                                      "record",
                                      "exposure.*",
                                      "insulation.*"
                                    ]
                                  },
                                  "uid": "d3ca934033"
                                }
                              ],
                              "uid": "f811b01bd5"
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "2477b7e905"
                  }
                ]
              },
              "uid": "9961adaa98"
            },
            {
              "switch": {
                "arg": "exposure_status",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "steps": [
                      {
                        "uid": "fb0fdb2f9b",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני ומשפחתי בבידוד, ושוהים יחד באותם החדרים",
                                  "ar": "أنا وعائلتي بحجر منزلي, ونتواجد مع بعض بنفس الغرف",
                                  "en": "My family and I are all quarantined, in the same rooms",
                                  "es": "Estoy en aislamiento con mi familia y permanecemos juntos en las mismas habitaciones",
                                  "fr": "Ma famille et moi sommes confinés, nous vivons dans les mêmes pièces",
                                  "ru": "Я и моя семья на карантине и находимся в одном помещении"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה תאריך התחיל הבידוד?",
                                      "ar": "في أي تاريخ بدأ الحجر الصحي؟",
                                      "en": "On what date did your quarantine begin?",
                                      "es": "¿En qué fecha comenzó el aislamiento?",
                                      "fr": "À quelle date le confinement a-t-il commencé ?",
                                      "ru": "Какого числа начался карантин?"
                                    }
                                  },
                                  "uid": "f1818f4f2d"
                                },
                                {
                                  "uid": "645528a738",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "insulation_start_date"
                                  }
                                }
                              ],
                              "uid": "f14e63ab7b",
                              "value": "insulation_with_family"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני בבידוד מבני משפחה, ובחדר סגור",
                                  "ar": "أنا معزول عن عائلتي, وبغرفة مغلقة",
                                  "en": "I'm quarantined from my family, in a separate room",
                                  "es": "Estoy aislado de mi familia, y en un cuarto cerrado",
                                  "fr": "Je suis isolé de ma famille et dans une pièce fermée",
                                  "ru": "Я в изоляции от семьи, и в закрытой комнате"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה תאריך התחיל הבידוד?",
                                      "ar": "في أي تاريخ بدأ الحجر الصحي؟",
                                      "en": "On what date did your quarantine begin?",
                                      "es": "¿En qué fecha comenzó el aislamiento?",
                                      "fr": "À quelle date le confinement a-t-il commencé ?",
                                      "ru": "Какого числа начался карантин?"
                                    }
                                  },
                                  "uid": "d64d63ba82"
                                },
                                {
                                  "uid": "5f298814b6",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "insulation_start_date"
                                  }
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מה הסיבה לשהות שלך בבידוד?",
                                      "ar": "شو سبب وجودك بالحجر الصحي؟",
                                      "en": "Why are you under quarantine?",
                                      "es": "¿Cuál es la razón por la que te encuentras en aislamiento?",
                                      "fr": "Quelle est la raison de votre confinement ?",
                                      "ru": "В чем причина вашего пребывания на карантине?"
                                    }
                                  },
                                  "uid": "a23809efad"
                                },
                                {
                                  "uid": "a51b1efaef",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חזרתי מחו״ל לאחרונה",
                                            "ar": "أنا بحجر صحي لأنني كنت مسافر/ة",
                                            "en": "I'm under quarantine because I recently returned from a foreign country",
                                            "es": "Estoy en cuarentena ya que regresé últimamente del exterior",
                                            "fr": "Je suis en confinement car je viens de rentrer de l'étranger",
                                            "ru": "Я на карантине, вследствие недавнего возвращения из-за границы"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "מתי חזרת לארץ?",
                                                "ar": "وينتا رجعت/ي على البلاد؟",
                                                "en": "When did you return to Israel?",
                                                "es": "¿Cuándo has regresado al país?",
                                                "fr": "Quand êtes-vous revenu en Israël ?",
                                                "ru": "Когда вы вернулись в Израиль?"
                                              }
                                            },
                                            "uid": "3af14d42ee"
                                          },
                                          {
                                            "uid": "8d53223749",
                                            "wait": {
                                              "input-kind": "date",
                                              "options": null,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "תאריך: dd/mm/yy",
                                                  "ar": "تاريخ: dd/mm/yy",
                                                  "en": "date: dd/mm/yy",
                                                  "es": "Fecha: dd.mm.aa",
                                                  "fr": "Date: dd/mm/yy",
                                                  "ru": "Число: dd/mm/yy"
                                                }
                                              },
                                              "variable": "insulation_returned_from_abroad_date"
                                            }
                                          }
                                        ],
                                        "uid": "afa97d10e1",
                                        "value": "back-from-abroad"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי נחשפתי לחולה מאומת",
                                            "ar": "أنا بحجر صحي لأنني تعرضت لمريض/ة تم التحقق منه/ا",
                                            "en": "I'm under quarantine because I've been exposed to a verified patient",
                                            "es": "Estoy en aislamiento porque he estado expuesto a un enfermo confirmado",
                                            "fr": "Je suis en confinement car j'ai été exposé à un malade confirmé",
                                            "ru": "Я на карантине вследствие нахождения рядом с подтвержденным больным"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "ידוע לך מה מספר החולה שפגשת?",
                                                "ar": "بتعرف/ي رقم المريض/ة اللي التقيته/ا؟",
                                                "en": "Do you know the number of the verified patient that you've been exposed to?",
                                                "es": "¿Sabes con qué enfermo (No. de enfermo) te has encontrado?",
                                                "fr": "Savez-vous le nombre de malades que vous avez rencontré ?",
                                                "ru": "Известен ли вам номер больного, с которым вы были в контакте?"
                                              }
                                            },
                                            "uid": "6a33972a29"
                                          },
                                          {
                                            "uid": "bd03329baf",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן, ידוע לי מספר החולה",
                                                      "ar": "نعم، أنا أعرف رقم المريض",
                                                      "en": "Yes, I know the verified patient's number",
                                                      "es": "Sí, sé con qué número de enfermo me he encontrado ",
                                                      "fr": "Oui, je connais le numéro du malade",
                                                      "ru": "Да, мне известен номер больного"
                                                    }
                                                  },
                                                  "steps": [
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "מצויין. מה המספר?",
                                                          "ar": "ممتاز. شو الرقم؟",
                                                          "en": "Excellent. What's their number?",
                                                          "es": "Excelente, ¿cuál es el número?",
                                                          "fr": "Excellent. Combien ?",
                                                          "ru": "Отлично. Какой его номер?"
                                                        }
                                                      },
                                                      "uid": "0e021aac7c"
                                                    },
                                                    {
                                                      "uid": "4ff35e1c83",
                                                      "wait": {
                                                        "placeholder": {
                                                          ".tx": {
                                                            "_": "מספר החולה שפגשתי, בספרות",
                                                            "ar": "رقم المريض/ة اللي التقيت فيه/ا, بالأرقام",
                                                            "en": "The number of the verified patient I met, digits only",
                                                            "es": "Número del enfermo con el que me he encontrado, en cifras",
                                                            "fr": "Numéro du malade rencontré, en chiffre",
                                                            "ru": "Номер больного с которым я был/а в контакте, цифрами"
                                                          }
                                                        },
                                                        "variable": "insulation_patient_number"
                                                      }
                                                    },
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "האם זכור לך היום שבו נפגשתם?",
                                                          "ar": "متذكر/ة بأي يوم التقيت فيه/ا؟",
                                                          "en": "Do you remember the date when you met that patient?",
                                                          "es": "¿Recuerdas en qué fecha se encontraron?",
                                                          "fr": "Vous rappelez-vous du jour où vous vous êtes rencontrés ?",
                                                          "ru": "Вы помните день вашей встречи?"
                                                        }
                                                      },
                                                      "uid": "b1e097d57b"
                                                    },
                                                    {
                                                      "uid": "58f49c26f5",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "כן, זכור לי התאריך",
                                                                "ar": "نعم، قم بتذكر التاريخ من أجلي",
                                                                "en": "Yes, I remember the date",
                                                                "es": "Sí, recuerdo la fecha",
                                                                "fr": "Oui, je me souviens de la date",
                                                                "ru": "Да, я помню дату"
                                                              }
                                                            },
                                                            "steps": [
                                                              {
                                                                "say": {
                                                                  ".tx": {
                                                                    "_": "מה היה התאריך?",
                                                                    "ar": "شو كان التاريخ؟",
                                                                    "en": "What was the date?",
                                                                    "es": "¿En qué fecha fue?",
                                                                    "fr": "Quelle était la date ?",
                                                                    "ru": "Какого это было числа?"
                                                                  }
                                                                },
                                                                "uid": "9f06440aec"
                                                              },
                                                              {
                                                                "uid": "759844494b",
                                                                "wait": {
                                                                  "input-kind": "date",
                                                                  "placeholder": {
                                                                    ".tx": {
                                                                      "_": "תאריך: dd/mm/yy",
                                                                      "ar": "تاريخ: dd/mm/yy",
                                                                      "en": "date: dd/mm/yy",
                                                                      "es": "Fecha: dd.mm.aa",
                                                                      "fr": "Date: dd/mm/yy",
                                                                      "ru": "Число: dd/mm/yy"
                                                                    }
                                                                  },
                                                                  "variable": "insulation_exposure_date"
                                                                }
                                                              }
                                                            ],
                                                            "uid": "72b4e523bf",
                                                            "value": "yes"
                                                          },
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "לא זכור לי",
                                                                "ar": "لا أتذكر",
                                                                "en": "I don't remember",
                                                                "es": "No lo recuerdo",
                                                                "fr": "Je ne me souviens pas",
                                                                "ru": "Не припомню"
                                                              }
                                                            },
                                                            "value": "no"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "uid": "a6fdd5ed5d",
                                                  "value": "yes"
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "לא ידוע לי",
                                                      "ar": "لا أعرف",
                                                      "en": "I don't know",
                                                      "es": "No lo sé",
                                                      "fr": "Je ne sais pas",
                                                      "ru": "Мне не известно"
                                                    }
                                                  },
                                                  "value": "no"
                                                }
                                              ]
                                            }
                                          }
                                        ],
                                        "uid": "8dee71f300",
                                        "value": "contact-with-patient"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חוויתי תסמינים",
                                            "ar": "أنا موجود/ة بحجر صحي لأنني شعرت بأعراض",
                                            "en": "I'm under quarantine because I've exhibited symptoms ",
                                            "es": "Estoy en aislamiento porque he padecido síntomas",
                                            "fr": "Je suis en confinement parce-que j'ai eu des symptômes",
                                            "ru": "Я на карантине вследствие появления симптомов"
                                          }
                                        },
                                        "value": "has_symptoms"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד מרצוני האישי",
                                            "ar": "أنا موجود/ة بحجر صحي بإختياري الشخصي",
                                            "en": "I'm isolated by my own choice",
                                            "es": "Estoy en aislamiento por propia voluntad",
                                            "fr": "Je suis en confinement de ma propre volonté",
                                            "ru": "Я на самоизоляции"
                                          }
                                        },
                                        "value": "voluntary"
                                      }
                                    ],
                                    "variable": "insulation_reason"
                                  }
                                }
                              ],
                              "uid": "cdbb8ee754",
                              "value": "insulation"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני חולה קורונה (מאומת בבדיקת מעבדה)",
                                  "ar": "أنا مريض كورونا (مؤكد بفحص مختبر)",
                                  "en": "I'm a verified COVID-19 patient (verified by a lab test)",
                                  "es": "Estoy diagnosticado con coronavirus (confirmado por medio de análisis de laboratorio)",
                                  "fr": "Je suis malade du Corona (vérifié par un test en laboratoire)",
                                  "ru": "Я болен Коронавирусом (подтверждено лабораторными анализами)"
                                }
                              },
                              "steps": [
                                {
                                  "uid": "32b02ca38f",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אשפוז בבית חולים",
                                            "ar": "في المستشفى",
                                            "en": "Hospitalized",
                                            "es": "Hospitalización",
                                            "fr": "Hospitalisation",
                                            "ru": "Госпитализирован/а в больнице"
                                          }
                                        },
                                        "value": "hospital"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "בבית מלון",
                                            "ar": "في الفندق",
                                            "en": "Hotel",
                                            "es": "En un hotel",
                                            "fr": "Dans un hôtel",
                                            "ru": "В отеле"
                                          }
                                        },
                                        "value": "hotel"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "בבית",
                                            "ar": "في البيت",
                                            "en": "Home",
                                            "es": "En mi casa",
                                            "fr": "À la maison",
                                            "ru": "Дома"
                                          }
                                        },
                                        "value": "home"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "החלמתי ואני בבית",
                                            "ar": "شفيت وأنا في البيت",
                                            "en": "I'm recovered and at home",
                                            "es": "Ya me he recuperado y estoy en casa",
                                            "fr": "Je ne suis plus malade et je suis à la maison",
                                            "ru": "Я выздоровел/а и нахожусь дома"
                                          }
                                        },
                                        "value": "recovered"
                                      }
                                    ],
                                    "variable": "diagnosed_location"
                                  }
                                }
                              ],
                              "uid": "7fdfa3db6a",
                              "value": "diagnosed"
                            },
                            {
                              "class": "other",
                              "show": {
                                ".tx": {
                                  "_": "אני לא בבידוד",
                                  "ar": "أنا لست بحجر صحي",
                                  "en": "I'm not under quarantine",
                                  "es": "No estoy en aislamiento",
                                  "fr": "Je ne suis pas en confinement",
                                  "ru": "Я не на карантине"
                                }
                              },
                              "value": "none"
                            }
                          ],
                          "variable": "exposure_status"
                        }
                      }
                    ],
                    "uid": "0aea258f6e",
                    "undefined": true
                  }
                ]
              },
              "uid": "7a791ac067"
            }
          ],
          "uid": "ebd966ac43"
        },
        {
          "name": "current-report",
          "steps": [
            {
              "switch": {
                "arg": "general_feeling",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "ומה נשמע היום?",
                            "ar": "كيف حالك اليوم؟",
                            "en": "How are things today?",
                            "es": "¿Y cómo estás hoy?",
                            "fr": "Et comment allez-vous aujourd'hui ?",
                            "ru": "А как ваше самочувствие сегодня?"
                          }
                        },
                        "uid": "a8ade6b2ba"
                      },
                      {
                        "uid": "8bd1462742",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "בסדר גמור",
                                  "ar": "ممتاز",
                                  "en": "Fine",
                                  "es": "Todo está bien",
                                  "fr": "Très bien",
                                  "ru": "Отлично"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "c56fee8f07"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "6145fe48e5"
                                }
                              ],
                              "uid": "2ff5d05446",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא כל כך טוב",
                                  "ar": "مش كثير منيح",
                                  "en": "Not so good",
                                  "es": "No muy bien",
                                  "fr": "Pas très bien",
                                  "ru": "Не очень хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "363362616a"
                                }
                              ],
                              "uid": "1764f660a9",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "2bf7b52516",
                    "undefined": true
                  },
                  {
                    "match": "feel_good",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "אני מקווה שהמרגש עדיין טוב כמו בדיווח הקודם",
                            "ar": "منتأمل أنك منيح مثل ما كنت بآخر إستبيان",
                            "en": "Hopefully, still feeling well like last time",
                            "es": "Espero que aún te sientas bien, como en el último informe enviado",
                            "fr": "J'espère que vous vous sentez toujours aussi bien que dans le rapport précédent",
                            "ru": "Я надеюсь, что вы себя чувствуете по-прежнему так же хорошо, как в предыдущем отчёте"
                          }
                        },
                        "uid": "a5ebc5d67b"
                      },
                      {
                        "uid": "46d340eb90",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בסדר גמור",
                                  "ar": "نعم, تمام",
                                  "en": "Yes, fine",
                                  "es": "Sí, todo está bien",
                                  "fr": "Oui, très bien",
                                  "ru": "Отлично"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre !",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "2936c148b0"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "fac1c21d48"
                                }
                              ],
                              "uid": "3b21d2175a",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לצערי לא כל כך טוב",
                                  "ar": "مع الأسف, مش كثير منيح",
                                  "en": "Not too well, I'm afraid",
                                  "es": "Lamentablemente, no muy bien",
                                  "fr": "Malheureusement pas très bien",
                                  "ru": "К сожалению, не очень хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "fa7220ddab"
                                }
                              ],
                              "uid": "47d91ed4d0",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "7671e76a41"
                  },
                  {
                    "match": "feel_bad",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "בדיווח שעבר סיפרת שהרגשת לא כל כך טוב... האם חל שיפור במצבך?",
                            "ar": "في آخر إستبيان ذكرت/ي انك مش كثير منيح/ة.. هل تحسن وضعك؟",
                            "en": "On your last report you mentioned you were not feeling well... are you feeling better now?",
                            "fr": "Dans le rapport précédent, vous avez dit que vous ne vous sentiez pas très bien ... votre état s'est-il amélioré ?",
                            "ru": "В последнем отчёте вы рассказали нам, что не очень хорошо себя чувствуете. С тех пор ваше состояние улучшилось?"
                          }
                        },
                        "uid": "46b80839fc"
                      },
                      {
                        "uid": "98c766d9cb",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, עכשיו הכל בסדר",
                                  "ar": "نعم, حاليًا كلشي تمام",
                                  "en": "Yes, all's well now",
                                  "es": "Sí, ahora todo está bien",
                                  "fr": "Oui, maintenant tout va bien",
                                  "ru": "Да, теперь всё хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "b9cde574b8"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "38b8805a2d"
                                }
                              ],
                              "uid": "75d8ef3565",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא, עדיין לא משהו",
                                  "ar": "لا, بعدني مش منيح",
                                  "en": "No, still so-so",
                                  "es": "No, aún no me siento bien",
                                  "fr": "Non, pas vraiment ",
                                  "ru": "Нет, всё еще не очень"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "49c5b0cb29"
                                }
                              ],
                              "uid": "8e09eddfe6",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "d7ec4e1f7c"
                  }
                ]
              },
              "uid": "85bf6d9ac2"
            },
            {
              "goto": "current-report-symptoms",
              "uid": "991e420cbb"
            }
          ],
          "uid": "c961d87d9d"
        },
        {
          "name": "current-report-symptoms",
          "steps": [
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "b19e056d7d"
            },
            {
              "goto": "current-report-cough-symptoms",
              "uid": "cb252a9f1a"
            },
            {
              "goto": "current-report-pain-symptoms",
              "uid": "03cd72e122"
            },
            {
              "goto": "current-report-temperature",
              "uid": "4cd7908fba"
            }
          ],
          "uid": "ee520e19a7"
        },
        {
          "name": "current-report-temperature",
          "steps": [
            {
              "switch": {
                "arg": "general_feeling",
                "cases": [
                  {
                    "match": "feel_good",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "למרות שאמרת קודם שההרגשה טובה, כדאי בתקופה כזו לקיים מעקב יומי אחר חום הגוף.",
                            "ar": "بالرغم من انك ذكرت سابقا أنك تشعر بتحسن, لكن من المستحسن في هذه الفترة تتبع درجة حرارة الجسم بشكل يومي.",
                            "en": "Even though you reported feeling well, in this situation it's good to take one's temperature daily.",
                            "es": "A pesar de que has informado sentirte bien, durante este período es conveniente controlar la fiebre a diario.",
                            "fr": "Même si vous vous sentez bien, il est recommandé pendant cette période de surveiller quotidiennement la température de votre corps.",
                            "ru": "Несмотря на то, что вы раньше сказали, что вы хорошо себя чувствуете, в эти дни стоит ежедневно проверять температуру."
                          }
                        },
                        "uid": "c57bd415ab"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "האם כבר נמדד חום היום?",
                            "ar": "هل قمت بقياس حرارتك اليوم؟",
                            "en": "Was the temperature taken today?",
                            "es": "¿Ya te has tomado la fiebre hoy?",
                            "fr": "Avez-vous déjà pris votre température au cours de la journée ? ",
                            "ru": "Вы уже измеряли температуру сегодня?"
                          }
                        },
                        "uid": "3c53fb2f06"
                      },
                      {
                        "uid": "36d6b55ab9",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, נמדד חום",
                                  "ar": "نعم، قمت بقياس الحرارة",
                                  "en": "Yes, temperature was checked",
                                  "es": "Sí, me he tomado la fiebre",
                                  "fr": "Oui, j'ai pris ma température",
                                  "ru": "Да, я измерял/а температуру"
                                }
                              },
                              "steps": [
                                {
                                  "goto": "ask-body-temperature",
                                  "uid": "14631f3588"
                                }
                              ],
                              "uid": "949c507f00"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "היום לא נמדד חום",
                                  "ar": "اليوم لم أقس الحرارة",
                                  "en": "Didn't take temperature today",
                                  "es": "Hoy no me he tomado la fiebre",
                                  "fr": "Je n'ai pas pris ma température aujourd'hui",
                                  "ru": "Сегодня не измерял/а температуру."
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "a968fdd528"
                  },
                  {
                    "match": "feel_bad",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם נמדד חום היום?",
                            "ar": "هل قمت بقياس حرارتك اليوم؟",
                            "en": "Was the temperature taken today?",
                            "es": "¿Te has tomado la fiebre hoy?",
                            "fr": "Avez-vous pris votre température aujourd'hui ? ",
                            "ru": "Измеряли ли вы температуру сегодня?"
                          }
                        },
                        "uid": "c930bb771f"
                      },
                      {
                        "uid": "479a691d3a",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, נמדד חום",
                                  "ar": "نعم، قمت بقياس الحرارة",
                                  "en": "Yes, temperature was checked",
                                  "es": "Sí, me he tomado la fiebre",
                                  "fr": "Oui, j'ai pris ma température",
                                  "ru": "Да, я измерял/а температуру"
                                }
                              },
                              "steps": [
                                {
                                  "goto": "ask-body-temperature",
                                  "uid": "396b062283"
                                }
                              ],
                              "uid": "1f8ef0a3d2"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "היום לא נמדד חום",
                                  "ar": "اليوم لم أقس الحرارة",
                                  "en": "Didn't take temperature today",
                                  "es": "Hoy no me he tomado la fiebre",
                                  "fr": "Je n'ai pas pris ma température aujourd'hui",
                                  "ru": "Сегодня не измерял/а температуру."
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "0d1cdea081"
                  }
                ]
              },
              "uid": "78dbfac628"
            }
          ],
          "uid": "89a20e8104"
        },
        {
          "name": "ask-body-temperature",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "ומה בדיוק המדחום אומר?",
                  "ar": "ماذا يقول ميزان الحرارة بالضبط؟",
                  "en": "What did the thermometer show?",
                  "es": "Y ¿Qué dice el termómetro exactamente?",
                  "fr": "Et quelle est la température indiquée par le thermomètre ?",
                  "ru": "И что точно показал градусник?"
                }
              },
              "uid": "da6e4c5a83"
            },
            {
              "uid": "5b91e58a40",
              "wait": {
                "input-kind": "number",
                "input-max": 43,
                "input-min": 35,
                "input-step": 0.1,
                "placeholder": {
                  ".tx": {
                    "_": "מעלות חום, 35.0-43.0",
                    "ar": "درجات حرارة, 35.0-43.0",
                    "en": "Temperature, 35.0-43.0 degrees Celsius.",
                    "es": "Grados de fiebre, 35-43",
                    "fr": "Degrés celsius, 35.0-43.0",
                    "ru": "35.0-43.0, в градусах"
                  }
                },
                "variable": "temperature"
              }
            }
          ],
          "uid": "177fb00c4b"
        },
        {
          "name": "current-report-top-level-symptoms",
          "steps": [
            {
              "uid": "536a638700",
              "wait": {
                "multi": true,
                "options": [
                  {
                    "field": "toplevel_symptoms_cough",
                    "show": {
                      ".tx": {
                        "_": "שיעולים או נזלת",
                        "ar": "سُعال او سيلان بالأنف",
                        "en": "Coughing or a runny nose",
                        "es": "Tos o secreción nasal",
                        "fr": "Toux ou nez qui coule",
                        "ru": "Кашель или насморк"
                      }
                    }
                  },
                  {
                    "field": "symptoms_sore_throat",
                    "show": {
                      ".tx": {
                        "_": "כאבי גרון",
                        "ar": "وجع حلق",
                        "en": "Sore throat",
                        "es": "Dolor de garganta",
                        "fr": "Maux de gorge",
                        "ru": "Боли в горле"
                      }
                    }
                  },
                  {
                    "field": "symptoms_breath_shortness",
                    "show": {
                      ".tx": {
                        "_": "קוצר נשימה",
                        "ar": "ضيق بالتنفس",
                        "en": "Shortness of breath",
                        "es": "Falta de aire al respirar",
                        "fr": "Essoufflement",
                        "ru": "Одышка"
                      }
                    }
                  },
                  {
                    "field": "toplevel_symptoms_pains",
                    "show": {
                      ".tx": {
                        "_": "כאבים",
                        "ar": "أوجاع",
                        "en": "Pain",
                        "es": "Dolores",
                        "fr": "Douleurs",
                        "ru": "Боли"
                      }
                    }
                  },
                  {
                    "field": "symptoms_diarrhea",
                    "show": {
                      ".tx": {
                        "_": "שלשול",
                        "ar": "إسهال",
                        "en": "Diarrhea",
                        "es": "Diarrea",
                        "fr": "Diarrhée",
                        "ru": "Понос"
                      }
                    }
                  },
                  {
                    "field": "symptoms_nausea_and_vomiting",
                    "show": {
                      ".tx": {
                        "_": "בחילה או הקאות",
                        "ar": "غثيان أو تقيؤ",
                        "en": "Nausea or vomiting",
                        "es": "Náuseas o vómitos ",
                        "fr": "Nausées ou vomissements",
                        "ru": "Тошнота или рвота"
                      }
                    }
                  },
                  {
                    "field": "symptoms_chills",
                    "show": {
                      ".tx": {
                        "_": "צמרמורת",
                        "ar": "إرتجاف",
                        "en": "Shivers or chills",
                        "es": "Escalofríos",
                        "fr": "Frissons",
                        "ru": "Озноб"
                      }
                    }
                  },
                  {
                    "field": "symptoms_confusion",
                    "show": {
                      ".tx": {
                        "_": "בלבול",
                        "ar": "هذيان",
                        "en": "Disorientation or confusion",
                        "es": "Confusión",
                        "fr": "Confusion",
                        "ru": "Замешательство"
                      }
                    }
                  },
                  {
                    "field": "symptoms_tiredness_or_fatigue",
                    "show": {
                      ".tx": {
                        "_": "עייפות או חולשה",
                        "ar": "تعب او ضعف",
                        "en": "Fatigue or weakness",
                        "es": "Cansancio o debilidad",
                        "fr": "Fatigue ou faiblesse",
                        "ru": "Усталость или слабость"
                      }
                    }
                  },
                  {
                    "field": "symptoms_smell_taste_loss",
                    "show": {
                      ".tx": {
                        "_": "איבדתי את חוש הטעם או הריח",
                        "ar": "فقدت الإحساس بالأطعمة أو بالروائح",
                        "en": "Lost my sense of taste or smell",
                        "es": "Pérdida del sentido del olfato o el gusto",
                        "fr": "J'ai perdu le sens du goût ou l'odorat",
                        "ru": "Я потерял/а чувство вкуса или запаха"
                      }
                    }
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין תסמינים</span>",
                        "ar": "<span class='empty'>ولا أي واحد من هاي الأعراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد أعراض</span>",
                        "en": "<span class='empty'>None of these symptoms</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No symptoms</span>",
                        "es": "<span class='empty'>Ninguno de estos síntomas</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay síntomas</span>",
                        "fr": "<span class='empty'>Aucun des ces symptômes</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas de symptômes </span>",
                        "ru": "<span class='empty'>Ни одного из этих симптомов</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет симптомов</span>"
                      }
                    }
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "update_from_selection",
                "params": [
                  "record",
                  "_var"
                ]
              },
              "uid": "e478a0d84a"
            }
          ],
          "uid": "6c5d380604"
        },
        {
          "name": "current-report-cough-symptoms",
          "steps": [
            {
              "switch": {
                "arg": "toplevel_symptoms_cough",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "נשמח לעוד כמה פרטים לגבי השיעול והנזלת.",
                            "ar": "بيسعدنا نعرف كمان تفاصيل عن السُعال وسيلان الأنف.",
                            "en": "Can you tell us a little more about the coughing and runny nose?",
                            "es": "Nos gustaría obtener algunos datos más respecto a la tos y las secreciones nasales.",
                            "fr": "Nous aimerions en savoir plus sur la toux et le nez qui coule.",
                            "ru": "Расскажите нам, пожалуйста, побольше о симптомах кашля и насморка."
                          }
                        },
                        "uid": "4498417043"
                      },
                      {
                        "uid": "ba485b7226",
                        "wait": {
                          "multi": true,
                          "options": [
                            {
                              "field": "symptoms_clogged_nose",
                              "show": {
                                ".tx": {
                                  "_": "נזלת או גודש באף",
                                  "ar": "سيلان أو إنسداد بالأنف",
                                  "en": "Runny nose or nasal congestion",
                                  "es": "Mucosidad o congestión nasal",
                                  "fr": "Nez qui coule ou congestion nasale",
                                  "ru": "Насморк или заложенность носа"
                                }
                              }
                            },
                            {
                              "field": "symptoms_dry_cough",
                              "show": {
                                ".tx": {
                                  "_": "שיעול יבש",
                                  "ar": "سعال ناشف",
                                  "en": "Dry cough",
                                  "es": "Tos seca",
                                  "fr": "Toux sèche",
                                  "ru": "Сухой кашель"
                                }
                              }
                            },
                            {
                              "field": "symptoms_moist_cough",
                              "show": {
                                ".tx": {
                                  "_": "שיעול לח, או שיעול עם כיח",
                                  "ar": "سُعال رطب, أو سُعال مع بلغم",
                                  "en": "Wet cough or wet cough with mucous",
                                  "es": "Tos grasa o tos con esputo (flema)",
                                  "fr": "Toux humide ou toux avec crachats",
                                  "ru": "Влажный кашель или кашель с мокротой"
                                }
                              }
                            },
                            {
                              "class": "other",
                              "show": {
                                ".tx": {
                                  "_": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>",
                                  "ar": "<span class='empty'>ولا أي واحد من هاي الأعراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد تفاصيل أخرى</span>",
                                  "en": "<span class='empty'>None of these symptoms</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No further details</span>",
                                  "es": "<span class='empty'>Ninguno de estos síntomas</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay más detalles</span>",
                                  "fr": "<span class='empty'>Aucun des ces symptômes</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'autres détails</span>      ",
                                  "ru": "<span class='empty'>Ни одного из этих симптомов</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет дополнительной информации</span>"
                                }
                              }
                            }
                          ],
                          "variable": "_var"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_var"
                          ]
                        },
                        "uid": "e45da0ef7d"
                      }
                    ],
                    "uid": "16bd40e2dc"
                  }
                ]
              },
              "uid": "f90ece8c4b"
            }
          ],
          "uid": "a7a1bb4959"
        },
        {
          "name": "current-report-pain-symptoms",
          "steps": [
            {
              "switch": {
                "arg": "toplevel_symptoms_pains",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "מה כואב בדיוק?",
                            "ar": "شو بيوجعك بالضبط؟",
                            "en": "Where does it hurt?",
                            "es": "¿Qué te duele exactamente?",
                            "fr": "Où avez-vous mal exactement ?",
                            "ru": "Где именно болит?"
                          }
                        },
                        "uid": "d592ad5db6"
                      },
                      {
                        "uid": "31fc600341",
                        "wait": {
                          "multi": true,
                          "options": [
                            {
                              "field": "symptoms_muscles_pain",
                              "show": {
                                ".tx": {
                                  "_": "כאבי שרירים",
                                  "ar": "وجع بالعضلات",
                                  "en": "Muscle pain",
                                  "es": "Dolor muscular",
                                  "fr": "Douleurs musculaires",
                                  "ru": "Мышечные боли"
                                }
                              }
                            },
                            {
                              "field": "symptoms_headache",
                              "show": {
                                ".tx": {
                                  "_": "כאבי ראש",
                                  "ar": "وجع رأس",
                                  "en": "Headache",
                                  "es": "Dolor de cabeza",
                                  "fr": "Maux de tête",
                                  "ru": "Головные боли"
                                }
                              }
                            },
                            {
                              "field": "symptoms_sore_throat",
                              "show": {
                                ".tx": {
                                  "_": "כאבי גרון",
                                  "ar": "وجع حلق",
                                  "en": "Sore throat",
                                  "es": "Dolor de garganta",
                                  "fr": "Maux de gorge",
                                  "ru": "Боли в горле"
                                }
                              }
                            },
                            {
                              "class": "other",
                              "show": {
                                ".tx": {
                                  "_": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>      ",
                                  "ar": "<span class='empty'>ولا أي واحد من هاي الأعراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد تفاصيل أخرى</span>",
                                  "en": "<span class='empty'>None of these symptoms\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No further details</span>      ",
                                  "es": "<span class='empty'>Ninguno de estos síntomas</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay más información</span>",
                                  "fr": "<span class='empty'>Aucun des ces symptômes</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'autres détails</span>      ",
                                  "ru": "<span class='empty'>Ни одного из этих симптомов</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет дополонительной информации</span>      "
                                }
                              }
                            }
                          ],
                          "variable": "_var"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_var"
                          ]
                        },
                        "uid": "7bbd6f3e3a"
                      }
                    ],
                    "uid": "6c9931a28a"
                  }
                ]
              },
              "uid": "8f88af58ea"
            }
          ],
          "uid": "7ca6e7b00e"
        },
        {
          "name": "exposures",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "חשוב לנו לדעת -",
                  "ar": "مهم النا نعرف -",
                  "en": "Another piece of important information",
                  "es": "Nos es importante saber -",
                  "fr": "Il est important pour nous de savoir -",
                  "ru": "Нам важно знать -"
                }
              },
              "uid": "1700fdb725"
            },
            {
              "say": {
                ".tx": {
                  "_": "האם ביממה האחרונה שהית בקרבת אנשים (<b>שאינם בני הבית</b>) למשך יותר מ-15 דקות ובמרחק של פחות מ-2 מטרים",
                  "ar": "هل كنت بقرب أشخاص مختلفين في آخر يومين (<b>ليسوا من أفراد أسرتك</b>) لأكثر من 15 دقيقة وبمسافة أقل من مترين",
                  "en": "During the last day, have you been with people (<b>that don't live in your house</b>) for more than 15 minutes, closer than 2 meters.",
                  "es": "¿Has estado en las últimas 24 horas con personas (<b>que no son miembros del hogar</b>) durante más de 15 minutos y a menos de 2 metros de distancia?",
                  "fr": "Au cours des dernières 24 heures, étiez-vous en présence de personnes (<b>qui n'habitent pas chez vous</b>) pendant plus de 15 minutes et à moins de 2 mètres ?",
                  "ru": "Находились ли вы за последние сутки около людей (<b>которые не живут с вами</b>) больше 15 минут и на расстoянии меньше 2-х метров?"
                }
              },
              "uid": "9f918e739e"
            },
            {
              "uid": "e1add559ab",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כן, שהיתי בקרבת אנשים נוספים",
                        "ar": "نعم, كنت بقرب أشخاص إضافيين",
                        "en": "Yes, I was close to more people",
                        "es": "Sí, estuve cerca de otras personas",
                        "fr": "Oui, j'ai été en présence d'autres personnes",
                        "ru": "Да, был/а около людей, которые не живут со мной"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "כמה מהם מבוגרים מעל גיל 18?",
                            "ar": "عدد الأشخاص البالغين فوق جيل ال 18؟",
                            "en": "How many were adults over the age of 18?",
                            "es": "¿Cuántos de ellos son mayores de 18 años?",
                            "fr": "Combien d'entre eux sont des adultes de plus de 18 ans ?",
                            "ru": "Сколько из них взрослые старше 18 лет?"
                          }
                        },
                        "uid": "db34667715"
                      },
                      {
                        "uid": "b2e4827138",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 99,
                          "input-min": 0,
                          "placeholder": {
                            ".tx": {
                              "_": "מספר המבוגרים, 0-99",
                              "ar": "عدد الأشخاص البالغين, 0-99",
                              "en": "Number of adults, 0-99",
                              "es": "Cantidad de adultos, 0-99",
                              "fr": "Nombre d'adultes, 0-99",
                              "ru": "Количество взрослых, 0-99"
                            }
                          },
                          "validation": "[0-9]+",
                          "variable": "_met_above_18"
                        }
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "וכמה ילדים מתחת לגיל 18?",
                            "ar": "عدد الأطفال تحت جيل 18؟",
                            "en": "And how many children under 18?",
                            "es": "¿ y cuántos menores de 18 años?",
                            "fr": "Et combien d'enfants de moins de 18 ans ?",
                            "ru": "А сколько детей до 18 лет?"
                          }
                        },
                        "uid": "3d21f8a809"
                      },
                      {
                        "uid": "a52138305e",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 99,
                          "input-min": 0,
                          "placeholder": {
                            ".tx": {
                              "_": "מספר הילדים, 0-99",
                              "ar": "عدد الأطفال, 0-99",
                              "en": "Number of children, 0-99",
                              "es": "Cantidad de niños, 0-99",
                              "fr": "Nombre d'enfants, 0-99",
                              "ru": "Количество детей, 0-99"
                            }
                          },
                          "validation": "[0-9]+",
                          "variable": "_met_under_18"
                        }
                      }
                    ],
                    "uid": "e169d07c3b"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "לא, רק עם בני הבית",
                        "ar": "لا, فقط مع سكان المنزل",
                        "en": "No, only with members of my household",
                        "es": "No, solo con los miembros del hogar",
                        "fr": "Non, je n'ai été en présence que des membres de ma famille nucléaire",
                        "ru": "Нет, только с моими домашними."
                      }
                    }
                  }
                ]
              }
            },
            {
              "do": {
                "cmd": "calculate_met_daily",
                "params": [
                  "record"
                ]
              },
              "uid": "f2d49a4869"
            },
            {
              "switch": {
                "arg": "_is_adult",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "do": {
                          "cmd": "fetch_public_service_data",
                          "params": [
                            "record"
                          ]
                        },
                        "uid": "897cae5e13"
                      },
                      {
                        "switch": {
                          "arg": "_public_service_status",
                          "cases": [
                            {
                              "match": "valid"
                            },
                            {
                              "match": "required",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "האם בשבוע האחרון נתת בעבודתך שירות באופן פיזי למעל 10 אנשים ביום?",
                                      "ar": "هل في الأسبوع السابق قمت خلال عملك بتقديم خدمات وجها لوجه, لأكثر من 10 أشخاص في اليوم؟",
                                      "en": "During the last week, at work, did you serve (face-to-face) more than 10 people in a day?",
                                      "es": "La semana pasada en tu trabajo de modo presencial ¿has atendido a más de 10 personas por día?",
                                      "fr": "Dans le cadre de votre profession, avez-vous physiquement aidé plus de 10 personnes au cours des 7 derniers jours ?",
                                      "ru": "На последней неделе на работе, обслуживали ли вы физически более 10-и человек в день?"
                                    }
                                  },
                                  "uid": "07940bc67a"
                                },
                                {
                                  "uid": "2df81cdb42",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "כן, נתתי שירות",
                                            "ar": "نعم, أعطيت خدمات",
                                            "en": "Yes, I did.",
                                            "es": "Sí, he brindado servicio a clientes",
                                            "fr": "Oui, j'ai assisté plus de dix personnes",
                                            "ru": "Да, обслуживал/а"
                                          }
                                        },
                                        "value": true
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא נתתי שירות",
                                            "ar": "لا, لم أعط أي خدمة",
                                            "en": "No, I didn't.",
                                            "es": "No, no he dado servicio a clientes",
                                            "fr": "Non, je n'ai pas assisté plus de dix personnes",
                                            "ru": "Нет, не обслуживал/а"
                                          }
                                        },
                                        "value": false
                                      }
                                    ],
                                    "variable": "_served_public_last_fortnight"
                                  }
                                },
                                {
                                  "do": {
                                    "cmd": "save_public_service_data",
                                    "params": [
                                      "record"
                                    ]
                                  },
                                  "uid": "d8a160a666"
                                }
                              ],
                              "uid": "e44769b360"
                            }
                          ]
                        },
                        "uid": "4b35972d5a"
                      }
                    ],
                    "uid": "a1a27bcaeb"
                  }
                ]
              },
              "uid": "aced4d907f"
            }
          ],
          "uid": "ce7628ae51"
        },
        {
          "name": "end-of-report",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "המון תודה, המידע ששלחת יעזור מאוד לצוות המחקר של מכון ויצמן וגם לעמיתים שלנו במדינות אחרות לזהות התפרצויות נקודתיות של המחלה ולנסות לטפל בהן לפני שהן מתפשטות.",
                  "ar": "شكرًا كثير, المعلومات اللي قدمتها/قدمتيها رح تفيد كثير باحثينا في معهد وايزمان وشركاؤنا في بلاد أخرى لمعرفة بؤر تفشي المرض ومحاولة معالجتها قبل الإنتشار.",
                  "en": "Thanks a lot. The information you have sent will help the Weizmann Institution researcher team as well as colleagues from other countries to locate disease hot-spots and try to deal with of them before they spread.",
                  "es": "Muchas gracias, la información que nos has brindado ayudará enormemente al equipo de investigación del Instituto Weizmann, así como a nuestros colegas en otros países, a identificar brotes puntuales de la enfermedad y a tratarlos antes de que se propaguen. ",
                  "fr": "Merci beaucoup, les informations que vous avez envoyées aideront grandement l'équipe de recherche de l'Institut Weizmann et nos collègues étrangers à identifier les foyers de la maladie et à essayer de les contenir avant qu'ils ne se propagent.",
                  "ru": "Огромное спасибо, предоставленная вами информация очень поможет  исследователям из Института Вейцмана и нашим зарубежным коллегам выявлять вспышки эпидемии и постараться предупредить их распространение."
                }
              },
              "uid": "b989da3e54"
            },
            {
              "say": {
                ".tx": {
                  "_": "אז נתראה מחר?",
                  "ar": "يعني منلتقي بكرا؟",
                  "en": "So we'll see you tomorrow?",
                  "es": "¿Nos vemos mañana?",
                  "fr": "Alors à demain ?",
                  "ru": "Так до завтра?"
                }
              },
              "uid": "0cd94aa41c"
            },
            {
              "uid": "ccc68125a7",
              "wait": {
                "options": [
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "בטח!",
                        "ar": "طبعًا!",
                        "en": "Sure!",
                        "es": "¡Claro!",
                        "fr": "Bien sûr !",
                        "ru": "Конечно!"
                      }
                    }
                  }
                ]
              }
            }
          ],
          "uid": "a92af82c81"
        },
        {
          "name": "promotion",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "סיימנו. רוצה להסתכל שוב במפת התסמינים?",
                  "ar": "انتهينا. هل تريد مجددًا القاء نظرة على خارطة الأعراض؟",
                  "en": "We're done. Would you like another look at the symptoms map?",
                  "es": "Ya hemos terminado ¿Quieres volver a ver el mapa de síntomas?",
                  "fr": "Nous avons terminé. Voulez vous revoir la carte des symptômes ?",
                  "ru": "Мы закончили. Хотите посмотреть опять на карту симптомов?"
                }
              },
              "uid": "c61d2efdd1"
            },
            {
              "uid": "6cbd31edfa",
              "wait": {
                "options": [
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "כן, בטח",
                        "ar": "نعم, طبعًا",
                        "en": "Yes, sure",
                        "es": "Sí, seguro",
                        "fr": "Oui, bien sûr",
                        "ru": "Да, конечно"
                      }
                    },
                    "steps": [
                      {
                        "do": {
                          "cmd": "show_map"
                        },
                        "uid": "063dc08606"
                      },
                      {
                        "goto": "complete",
                        "uid": "47ac1483e3"
                      }
                    ],
                    "uid": "89ec5d6e9c"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "לא עכשיו",
                        "ar": "لاحقًا ",
                        "en": "Not now",
                        "es": "Ahora no",
                        "fr": "Pas maintenant",
                        "ru": "Не сейчас"
                      }
                    }
                  }
                ]
              }
            }
          ],
          "uid": "4c6a26288b"
        }
      ]
    },
    {
      "keys": [
        {
          "name": "calendarTitle",
          "show": {
            ".tx": {
              "_": "זמן לדיווח הבריאות היומי!",
              "ar": "حان وقت التبليغ اليومي عن وضعنا الصحي!",
              "en": "Time for your Daily Health Report!",
              "es": "¡Es hora de informarnos sobre tu estado de salud hoy!",
              "fr": "C'est le moment du rapport de santé quotidien !",
              "ru": "Время для ежедневного отчёта о состоянии вашего здоровья! "
            }
          }
        },
        {
          "name": "calendarBody",
          "show": {
            ".tx": {
              "_": "הגיע הזמן לדווח שוב כיצד אתם מרגישים! רק ביחד ננצח את הקורונה 💪🏽!",
              "ar": "حان الوقت ان تخبرونا مجددًا كيف حالكم! معًا فقط سوف نهزم الكورونا💪🏽!",
              "en": "Time to report again about how you're doing! It takes all of us to beat the Corona virus 💪🏽!",
              "es": "¡Llegó la hora de que nos vuelvas a contar cómo se sienten! ¡Sólo juntos venceremos a Coronavirus 💪🏽!",
              "fr": "Il est de nouveau temps de décrire votre état de santé ! Nous allons gagner contre le Corona ensemble !",
              "ru": "Пора снова заполнить отчёт о здоровье! Вместе мы победим Коронавирус :muscle::skin-tone-4:! "
            }
          }
        }
      ],
      "name": "generic-translation-assets"
    }
  ]
};
