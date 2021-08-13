class AddLevelToLanguageToStudents < ActiveRecord::Migration[5.2]
  def change
    add_column :language_to_students, :level, :integer, null: false
  end
end
