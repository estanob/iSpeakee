# == Schema Information
#
# Table name: studied_languages
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  language_id :integer          not null
#  student_id  :integer          not null
#
# Indexes
#
#  index_studied_languages_on_student_id_and_language_id  (student_id,language_id) UNIQUE
#
class StudiedLanguage < ApplicationRecord
end
