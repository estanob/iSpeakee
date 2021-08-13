json.extract! follow, :id, :follower_id, :followee_id, :created_at, :updated_at
json.follower follow.follower_id
json.followee follow.followee_id