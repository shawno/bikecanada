module RideHelper

	#return formatted km from meters
	def format_km(meters = 0)
		(meters/1000).round(1).to_s + ' km'
	end

	#turn a time string into X hours, YY minutes
	def format_time_h_mm(time_string)
		result = ''
		time_duration = Time.at(time_string).utc

		#format hours
		if time_duration.hour > 0
  			result << time_duration.strftime('%k hour')
  			if time_duration.hour > 1
				result << 's'
			end
			result << ', '
  		end

  		#format minutes
  		if time_duration.min > 0
  			result << time_duration.strftime('%M minute')
	  		if time_duration.min > 1
				result << 's'
	  		end
  		end
	end

	#takes meters/sec as a string, returns km/h
	def format_speed(speed_m_s)
		(speed_m_s*3.6).round(1).to_s + ' km/h'
	end


end
