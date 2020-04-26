class AddSchoolToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :school, :string
    add_column :users, :gradYear, :integer
  end
end
