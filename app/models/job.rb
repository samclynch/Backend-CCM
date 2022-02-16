class Job < ApplicationRecord
    belongs_to :user, :optional => true
    validates :service, :presence => true
    validates :message, :presence => true
    validates :date, :presence => true
end
