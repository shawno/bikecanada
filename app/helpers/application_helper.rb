module ApplicationHelper

	#Returns the full title on a per-page basis.
	def full_title(page_title = '')
		base_title = "Shawn's Bike Trip Across Canada"
		if page_title.empty?
			base_title
		else
			page_title + " | " + base_title
		end
	end
end
