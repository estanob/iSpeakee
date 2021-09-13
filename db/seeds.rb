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
  first_name: "Señorita",
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

languageToStudent1 = LanguageToStudent.create!(
  language_id: language1.id,
  student_id: user1.id,
  level: 2
)

languageToStudent2 = LanguageToStudent.create!(
  language_id: language2.id,
  student_id: user1.id,
  level: 4
)

languageToStudent3 = LanguageToStudent.create!(
  language_id: language3.id,
  student_id: user1.id,
  level: 4
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

languageToStudent11 = LanguageToStudent.create!(
  language_id: language6.id,
  student_id: user1.id,
  level: 7
)

post1 = Post.create!(
  creator_id: user1.id,
  body: "哈囉我想要在iSpeakee這邊找一些中文老師。你們也可以跟我學英文"
)

post2 = Post.create!(
  creator_id: user1.id,
  body: 'Qué es la que hay"\n" Yo quiero practicar el español aquí en iSpeakee y al mismo tiempo te puedo enseñar el inglés'
)

post3 = Post.create!(
  creator_id: user1.id,
  body: "Ciao a tutti! Voglio imparare e praticare l'italiano e vi posso insegnare l'inglese"
)

post4 = Post.create!(
  creator_id: user5.id,
  body: "Qué es la que hay corillo. Si uds quieren aprender el español aquí en iSpeakee escójanme para ser su profesor del español boricua"
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