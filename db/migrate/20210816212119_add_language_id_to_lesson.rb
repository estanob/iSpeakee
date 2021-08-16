class AddLanguageIdToLesson < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :language_id, :bigint, null: false
  end
end
