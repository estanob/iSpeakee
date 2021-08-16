class AddDatetimeToLessons < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :when, :datetime
  end
end
