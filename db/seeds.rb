# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Language.destroy_all
LanguageToStudent.destroy_all
Post.destroy_all
Follow.destroy_all
Lesson.destroy_all
TeacherToStudent.destroy_all
StudiedLanguage.destroy_all
TeacherProfile.destroy_all
FeedbackComment.destroy_all

user1 = User.create!(
  first_name: "Brandon",
  last_name: "Estaño",
  username: "estanob",
  password: "password123456",
  display_name: "Brandon 伯龍"
)

user2 = User.create!(
  first_name: "Rabbit",
  last_name: "Bunny",
  username: "bunnyrabbit262",
  password: "password123456",
  display_name: ""
)

user3 = User.create!(
  first_name: "Software",
  last_name: "Engineer",
  username: "swe888",
  password: "password123456",
  display_name: "SWE"
)

user4 = User.create!(
  first_name: "Demo",
  last_name: "User",
  username: "demo123",
  password: "123456",
  display_name: "Demo Guest"
)

user5 = User.create!(
  first_name: "Jean Carlos",
  last_name: "Santiago Pérez",
  username: "guaynaa",
  password: "123456",
  display_name: "GUAYNAA"
)

user6 = User.create!(
  first_name: "Gabry",
  last_name: "Ponte",
  username: "gponte",
  password: "123456",
  display_name: ""
)

user7 = User.create!(
  first_name: "Luis",
  last_name: "Fonsi",
  username: "fonsiluis",
  password: "123456",
  display_name: ""
)

user8 = User.create!(
  first_name: "Yanyi",
  last_name: "Yanyi",
  username: "missyanyi",
  password: "123456",
  display_name: "Señorita Yanyi"
)

user9 = User.create!(
  first_name: "Jay",
  last_name: "Chou",
  username: "zhoujielun",
  password: "123456",
  display_name: "周杰倫"
)

user10 = User.create!(
  first_name: "Muscle",
  last_name: "Guy",
  username: "jianrengaiyi",
  password: "123456",
  display_name: "健仁蓋伊"
)

user11 = User.create!(
  first_name: "Giorgio",
  last_name: "Armani",
  username: "armanigiorgio",
  password: "123456",
  display_name: ""
)

user12 = User.create!(
  first_name: "Leonardo",
  last_name: "da Vinci",
  username: "davincileonardo",
  password: "123456",
  display_name: ""
)

user13 = User.create!(
  first_name: "Gabrielle 'Coco'",
  last_name: "Chanel",
  username: "cocochanel",
  password: "123456",
  display_name: "Coco"
)

user14 = User.create!(
  first_name: "Victor",
  last_name: "Hugo",
  username: "hugovictor",
  password: "123456",
  display_name: ""
)

user15 = User.create!(
  first_name: "Emmanuel",
  last_name: "Macron",
  username: "macronemm",
  password: "123456",
  display_name: ""
)

user16 = User.create!(
  first_name: "Claude",
  last_name: "Monet",
  username: "cmonet",
  password: "123456",
  display_name: ""
)

user17 = User.create!(
  first_name: "Vicente",
  last_name: "Ydrach",
  username: "chente",
  password: "123456",
  display_name: "Chente"
)

user18 = User.create!(
  first_name: "Jonathan",
  last_name: "Tehau",
  username: "tehau",
  password: "123456",
  display_name: ""
)

user19 = User.create!(
  first_name: "Jon",
  last_name: "Kortajarena",
  username: "jonkort",
  password: "123456",
  display_name: ""
)

language1 = Language.create!(
  name: "Italian"
)

language2 = Language.create!(
  name: "Spanish"
)
language3 = Language.create!(
  name: "Chinese (Mandarin)"
)

language4 = Language.create!(
  name: "Chinese (Cantonese)"
)

language5 = Language.create!(
  name: "Chinese (Taiwanese)"
)

language6 = Language.create!(
  name: "English"
)

language7 = Language.create!(
  name: "Portuguese"
)

language8 = Language.create!(
  name: "Japanese"
)

language9 = Language.create!(
  name: "Filipino (Cebuano)"
)

language10 = Language.create!(
  name: "Filipino (Tagalog)"
)

language11 = Language.create!(
  name: "French"
)

language12 = Language.create!(
  name: "German"
)

language13 = Language.create!(
  name: "Basque/Euskera"
)

languageToStudent1 = LanguageToStudent.create!(
  language_id: language1.id,
  student_id: user1.id,
  level: 3
)

languageToStudent2 = LanguageToStudent.create!(
  language_id: language2.id,
  student_id: user1.id,
  level: 5
)

languageToStudent3 = LanguageToStudent.create!(
  language_id: language3.id,
  student_id: user1.id,
  level: 5
)

languageToStudent4 = LanguageToStudent.create!(
  language_id: language4.id,
  student_id: user1.id,
  level: 2
)

languageToStudent5 = LanguageToStudent.create!(
  language_id: language5.id,
  student_id: user1.id,
  level: 1
)

languageToStudent6 = LanguageToStudent.create!(
  language_id: language7.id,
  student_id: user1.id,
  level: 1
)

languageToStudent7 = LanguageToStudent.create!(
  language_id: language8.id,
  student_id: user1.id,
  level: 2
)

languageToStudent8 = LanguageToStudent.create!(
  language_id: language9.id,
  student_id: user1.id,
  level: 3
)

languageToStudent9 = LanguageToStudent.create!(
  language_id: language10.id,
  student_id: user1.id,
  level: 3
)

languageToStudent10 = LanguageToStudent.create!(
  language_id: language6.id,
  student_id: user5.id,
  level: 3
)

languageToStudent11 = LanguageToStudent.create!(
  language_id: language6.id,
  student_id: user7.id,
  level: 6
)

languageToStudent12 = LanguageToStudent.create!(
  language_id: language6.id,
  student_id: user1.id,
  level: 7
)

languageToStudent13 = LanguageToStudent.create!(
  language_id: language11.id,
  student_id: user1.id,
  level: 1
)

languageToStudent14 = LanguageToStudent.create!(
  language_id: language13.id,
  student_id: user1.id,
  level: 1
)

languageToStudent15 = LanguageToStudent.create!(
  language_id: language13.id,
  student_id: user19.id,
  level: 7
)

languageToStudent16 = LanguageToStudent.create!(
  language_id: language2.id,
  student_id: user19.id,
  level: 7
)

languageToStudent17 = LanguageToStudent.create!(
  language_id: language6.id,
  student_id: user19.id,
  level: 3
)

post1 = Post.create!(
  creator_id: user1.id,
  body: "哈囉我想要在iSpeakee這邊找一些中文老師。你們也可以跟我學英文"
)

post2 = Post.create!(
  creator_id: user1.id,
  body: "Qué es la que hay\n Yo quiero practicar el español aquí en iSpeakee y al mismo tiempo te puedo enseñar el inglés"
)

post3 = Post.create!(
  creator_id: user1.id,
  body: "Ciao a tutti! Voglio imparare e praticare l'italiano e vi posso insegnare l'inglese"
)

post4 = Post.create!(
  creator_id: user5.id,
  body: "Qué es la que hay corillo. \nSi uds quieren aprender el español aquí en iSpeakee escójanme para ser su profesor del español boricua"
)

follow1 = Follow.create!(
  followee_id: user1.id,
  follower_id: user2.id
)

follow2 = Follow.create!(
  followee_id: user1.id,
  follower_id: user3.id
)

follow3 = Follow.create!(
  followee_id: user1.id,
  follower_id: user4.id
)

follow4 = Follow.create!(
  followee_id: user2.id,
  follower_id: user4.id
)

follow5 = Follow.create!(
  followee_id: user3.id,
  follower_id: user4.id
)

follow6 = Follow.create!(
  followee_id: user1.id,
  follower_id: user5.id
)

follow7 = Follow.create!(
  followee_id: user5.id,
  follower_id: user1.id
)

follow8 = Follow.create!(
  followee_id: user1.id,
  follower_id: user18.id
)

follow9 = Follow.create!(
  followee_id: user18.id,
  follower_id: user1.id
)

follow10 = Follow.create!(
  followee_id: user1.id,
  follower_id: user19.id
)

follow11 = Follow.create!(
  followee_id: user19.id,
  follower_id: user1.id
)

lesson1 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 8, 15, 15, 0, 0),
  end_time: DateTime.new(2021, 8, 15, 16, 0, 0)
)

lesson2 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user6.id,
  language_id: language1.id, # Italian
  when: DateTime.new(2021, 8, 16, 14, 30, 0),
  end_time: DateTime.new(2021, 8, 16, 15, 15, 0)
)

lesson3 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user7.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 7, 17, 18, 0, 0),
  end_time: DateTime.new(2021, 7, 17, 19, 0, 0)
)

lesson4 = Lesson.create!(
  student_id: user5.id,
  teacher_id: user1.id,
  language_id: language6.id, # English
  when: DateTime.new(2021, 8, 8, 15, 0, 0),
  end_time: DateTime.new(2021, 8, 8, 16, 0, 0)
)

lesson5 = Lesson.create!(
  student_id: user5.id,
  teacher_id: user1.id,
  language_id: language6.id, # English
  when: DateTime.new(2021, 12, 25, 16, 0, 0),
  end_time: DateTime.new(2021, 12, 25, 17, 30, 0)
)

lesson6 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 12, 26, 0, 0, 0),
  end_time: DateTime.new(2021, 12, 26, 1, 30, 0)
)

lesson7 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 11, 18, 18, 0, 0),
  end_time: DateTime.new(2021, 11, 18, 19, 0, 0)
)

lesson8 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 11, 1, 2, 0, 0),
  end_time: DateTime.new(2021, 11, 1, 3, 30, 0)
)

lesson9 = Lesson.create!(
  student_id: user5.id,
  teacher_id: user1.id,
  language_id: language6.id, # English
  when: DateTime.new(2021, 11, 1, 5, 0, 0),
  end_time: DateTime.new(2021, 11, 1, 5, 30, 0)
)

lesson10 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user7.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 9, 15, 15, 0, 0),
  end_time: DateTime.new(2021, 9, 15, 16, 00, 0)
)

lesson11 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user8.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 9, 20, 15, 0, 0),
  end_time: DateTime.new(2021, 9, 20, 16, 00, 0)
)

lesson12 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user8.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 9, 27, 15, 0, 0),
  end_time: DateTime.new(2021, 9, 27, 16, 00, 0)
)

lesson13 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 6, 20, 16, 30, 0),
  end_time: DateTime.new(2021, 6, 20, 17, 30, 0)
)

lesson14 = Lesson.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  language_id: language2.id, # Spanish
  when: DateTime.new(2021, 6, 21, 16, 30, 0),
  end_time: DateTime.new(2021, 6, 21, 17, 30, 0)
)

lesson15 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user11.id,
  language_id: language1.id, # Italian
  when: DateTime.new(2021, 7, 25, 16, 0, 0),
  end_time: DateTime.new(2021, 7, 25, 17, 0, 0)
)

lesson16 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user11.id,
  language_id: language1.id, # Italian
  when: DateTime.new(2021, 8, 1, 16, 0, 0),
  end_time: DateTime.new(2021, 8, 1, 17, 0, 0)
)

lesson17 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user11.id,
  language_id: language1.id, # Italian
  when: DateTime.new(2021, 8, 15, 16, 0, 0),
  end_time: DateTime.new(2021, 8, 15, 17, 0, 0)
)

lesson18 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user11.id,
  language_id: language1.id, # Italian
  when: DateTime.new(2021, 10, 31, 16, 0, 0),
  end_time: DateTime.new(2021, 10, 31, 17, 0, 0)
)

lesson19 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user15.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 9, 19, 17, 30, 0),
  end_time: DateTime.new(2021, 9, 19, 18, 30, 0)
)

lesson20 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user18.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 11, 15, 18, 0, 0),
  end_time: DateTime.new(2021, 11, 15, 19, 0, 0)
)

lesson21 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user18.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 11, 24, 18, 0, 0),
  end_time: DateTime.new(2021, 11, 24, 19, 30, 0)
)

lesson22 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user18.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 11, 14, 18, 0, 0),
  end_time: DateTime.new(2021, 11, 14, 19, 30, 0)
)

lesson23 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user18.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 12, 31, 18, 0, 0),
  end_time: DateTime.new(2021, 12, 31, 19, 30, 0)
)

lesson24 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user18.id,
  language_id: language11.id, # French
  when: DateTime.new(2022, 2, 22, 18, 0, 0),
  end_time: DateTime.new(2022, 2, 22, 19, 0, 0)
)

lesson25 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user18.id,
  language_id: language11.id, # French
  when: DateTime.new(2022, 3, 12, 18, 0, 0),
  end_time: DateTime.new(2022, 3, 12, 19, 0, 0)
)

lesson26 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user19.id,
  language_id: language13.id, # Euskera
  when: DateTime.new(2021, 8, 1, 19, 0, 0),
  end_time: DateTime.new(2021, 8, 1, 20, 0, 0)
)

lesson27 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user19.id,
  language_id: language13.id, # Euskera
  when: DateTime.new(2021, 8, 2, 19, 0, 0),
  end_time: DateTime.new(2021, 8, 2, 20, 0, 0)
)

lesson28 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user19.id,
  language_id: language13.id, # Euskera
  when: DateTime.new(2021, 12, 25, 19, 0, 0),
  end_time: DateTime.new(2021, 12, 25, 20, 0, 0)
)

lesson29 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user15.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 11, 2, 17, 0, 0),
  end_time: DateTime.new(2021, 11, 2, 18, 0, 0)
)

lesson30 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user15.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 11, 3, 17, 0, 0),
  end_time: DateTime.new(2021, 11, 3, 18, 0, 0)
)

lesson31 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user15.id,
  language_id: language11.id, # French
  when: DateTime.new(2021, 11, 30, 19, 0, 0),
  end_time: DateTime.new(2021, 11, 30, 19, 45, 0)
)

lesson32 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user15.id,
  language_id: language11.id, # French
  when: DateTime.new(2022, 1, 12, 19, 0, 0),
  end_time: DateTime.new(2022, 1, 12, 20, 30, 0)
)

lesson33 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user10.id,
  language_id: language3.id, # Mandarin
  when: DateTime.new(2021, 8, 9, 1, 0, 0),
  end_time: DateTime.new(2021, 8, 9, 2, 30, 0)
)

lesson34 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user10.id,
  language_id: language3.id, # Mandarin
  when: DateTime.new(2021, 9, 1, 1, 0, 0),
  end_time: DateTime.new(2021, 9, 1, 2, 30, 0)
)

lesson35 = Lesson.create!(
  student_id: user1.id, 
  teacher_id: user10.id,
  language_id: language3.id, # Mandarin
  when: DateTime.new(2021, 12, 9, 14, 0, 0),
  end_time: DateTime.new(2021, 12, 9, 15, 0, 0)
)

teacherToStudent1 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user5.id
)

teacherToStudent2 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user6.id
)

teacherToStudent3 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user7.id
)

teacherToStudent4 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user8.id
)

teacherToStudent5 = TeacherToStudent.create!(
  student_id: user4.id,
  teacher_id: user5.id
)

teacherToStudent6 = TeacherToStudent.create!(
  student_id: user4.id,
  teacher_id: user6.id
)

teacherToStudent7 = TeacherToStudent.create!(
  student_id: user4.id,
  teacher_id: user7.id
)

teacherToStudent8 = TeacherToStudent.create!(
  student_id: user4.id,
  teacher_id: user8.id
)

teacherToStudent9 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user9.id
)

teacherToStudent10 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user10.id
)

teacherToStudent10 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user19.id
)

teacherToStudent10 = TeacherToStudent.create!(
  student_id: user19.id,
  teacher_id: user1.id
)

teacherToStudent11 = TeacherToStudent.create!(
  student_id: user1.id,
  teacher_id: user18.id
)

teacherToStudent12 = TeacherToStudent.create!(
  student_id: user18.id,
  teacher_id: user1.id
)

studiedLanguage1 = StudiedLanguage.create!(
  student_id: user1.id,
  language_id: language1.id,
)

studiedLanguage2 = StudiedLanguage.create!(
  student_id: user1.id,
  language_id: language2.id,
)

studiedLanguage3 = StudiedLanguage.create!(
  student_id: user1.id,
  language_id: language3.id,
)

studiedLanguage4 = StudiedLanguage.create!(
  student_id: user1.id,
  language_id: language7.id,
)

studiedLanguage5 = StudiedLanguage.create!(
  student_id: user4.id,
  language_id: language1.id,
)

studiedLanguage6 = StudiedLanguage.create!(
  student_id: user4.id,
  language_id: language3.id,
)

studiedLanguage7 = StudiedLanguage.create!(
  student_id: user4.id,
  language_id: language4.id,
)

studiedLanguage8 = StudiedLanguage.create!(
  student_id: user4.id,
  language_id: language7.id,
)

studiedLanguage9 = StudiedLanguage.create!(
  student_id: user1.id,
  language_id: language11.id,
)

studiedLanguage10 = StudiedLanguage.create!(
  student_id: user1.id,
  language_id: language13.id,
)

teacherProfile1 = TeacherProfile.create!(
  teacher_id: user5.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

teacherProfile2 = TeacherProfile.create!(
  teacher_id: user6.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

teacherProfile3 = TeacherProfile.create!(
  teacher_id: user7.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

teacherProfile4 = TeacherProfile.create!(
  teacher_id: user8.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

teacherProfile5 = TeacherProfile.create!(
  teacher_id: user9.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

teacherProfile6 = TeacherProfile.create!(
  teacher_id: user10.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

teacherProfile7 = TeacherProfile.create!(
  teacher_id: user18.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

teacherProfile8 = TeacherProfile.create!(
  teacher_id: user19.id,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  me_as_teacher: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  lessons_teaching_style: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
)

feedback1 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  lesson_id: lesson13.id,
  body: "Brandon me sorprendió con su nivel de español, especialmente por su acento boricua\nMe siento muy orgullo al escucharlo hablar como nosotros puertorriqueños\nHasta la próxima Brandon",
  date_written: DateTime.new(2021, 6, 20, 18, 25, 0),
)

feedback2 = FeedbackComment.create!(
  student_id: user5.id,
  teacher_id: user1.id,
  lesson_id: lesson9.id,
  body: "Guaynaa's English level is showing a lot of improvement since our very first class together\nHe is still nervous, but I know that with more practice he will be speaking fluently in no time\nSee you next time!",
  date_written: DateTime.new(2021, 8, 16, 18, 20, 0),
)

feedback3 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  lesson_id: lesson1.id,
  body: "Brandon sigue hablando como un boricua\nDebido a la práctica conmigo, nunca va a perder el acento cuando habla español",
  date_written: DateTime.new(2021, 6, 20, 18, 25, 0),
)

feedback4 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user5.id,
  lesson_id: lesson14.id,
  body: "Brandon entendió toda la jerga que le enseñé durante la clase de ayer",
  date_written: DateTime.new(2021, 6, 21, 19, 52, 0),
)

feedback5 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user11.id,
  lesson_id: lesson15.id,
  body: "Brandon parla molto bene l'italiano. Ha l'accento toscano",
  date_written: DateTime.new(2021, 7, 25, 19, 42, 0),
)

feedback6 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user11.id,
  lesson_id: lesson18.id,
  body: "L'italiano di Brandon è migliorato, non ha avuto errori in questa lezione",
  date_written: DateTime.new(2021, 10, 31, 19, 35, 0),
)

feedback7 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user15.id,
  lesson_id: lesson19.id,
  body: "Brandon's French listening is pretty good, and today was his first French class ever. À la prochaine!",
  date_written: DateTime.new(2021, 9, 20, 05, 57, 0),
)

feedback8 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user15.id,
  lesson_id: lesson25.id,
  body: "Brandon's French level is good enough to have a very basic conversation. À la prochaine!",
  date_written: DateTime.new(2022, 3, 12, 19, 57, 0),
)

feedback9 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user19.id,
  lesson_id: lesson27.id,
  body: "Brandon tu pronunciación de Euskera es bastante buena. Estoy muy sorprendido. Agur hasta la próxima!",
  date_written: DateTime.new(2022, 3, 12, 19, 57, 0),
)

feedback10 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user15.id,
  lesson_id: lesson29.id,
  body: "Brandon, your French pronunciation is so good for your first month of studying! À la prochaine!!!",
  date_written: DateTime.new(2021, 11, 2, 18, 27, 0),
)

feedback11 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user10.id,
  lesson_id: lesson33.id,
  body: "Brandon的中文講的起流利的，而且他的口音人很像我們台灣人的",
  date_written: DateTime.new(2021, 8, 9, 3, 7, 0),
)

feedback12 = FeedbackComment.create!(
  student_id: user1.id,
  teacher_id: user10.id,
  lesson_id: lesson33.id,
  body: "台灣口音起標準，真的很厲害",
  date_written: DateTime.new(2021, 9, 1, 2, 55, 0),
)