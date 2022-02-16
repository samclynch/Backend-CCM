class JobSerializer < ActiveModel::Serializer
  attributes :id, :service, :message, :date, :user_id
end
