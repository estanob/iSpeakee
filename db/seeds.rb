# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

user1 = User.create!(
  first_name: "Brandon",
  last_name: "Estaño",
  username: "estanob",
  password: "password123456"
)

user2 = User.create!(
  first_name: "Rabbit",.
  ..
  last_name: "Bunny",
  username: "bunnyrabbit262",
  password: "password123456"
)

user3 = User.create!(
  first_name: "Software",
  last_name: "Engineer",
  username: "swe888",
  password: "password123456"
)

user4 = User.create!(
  first_name: "Demo",
  last_name: "User",
  username: "demo123",
  password: "123456"
)