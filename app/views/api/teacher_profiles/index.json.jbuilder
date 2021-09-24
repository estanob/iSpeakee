@teacher_profiles.each do |teacher_profile|
  json.set! teacher_profile.id do
    json.partial! "teacher_profile", teacher_profile: teacher_profile
  end
end