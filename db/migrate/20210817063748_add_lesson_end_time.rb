class AddLessonEndTime < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :end_time, :datetime
  end
end
