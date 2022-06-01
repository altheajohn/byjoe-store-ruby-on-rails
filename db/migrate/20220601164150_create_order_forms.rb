class CreateOrderForms < ActiveRecord::Migration[6.1]
  def change
    create_table :order_forms do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :order_for
      t.string :order_details
      t.timestamps
    end
  end
end
