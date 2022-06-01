class Product < ApplicationRecord
    has_one :inventory
    belongs_to :category
end
