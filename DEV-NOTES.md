javascript task - a small blog

JavaScript Developer Test 

Below is a fairly straightforward programming task.  Please give evidence of your knowledge and standard approach to delivering a Production grade software solution. 

The solution must be written using JavaScript in Angular JS (not Typescript or Angular 4) 
The backend can be any technology (e.g. Node) that retains data, ideally in a database but can be in memory.

Simple Blog

Create a blog that has the following functionality: - 

o	The ability to create a new blog entry, saved to the backend
o	A list of blogs that have been created
o	Viewing of a single blog entry 

Bonus - Ability to filter the blog list based on tags / labels.

Solution should have generic branding and be delivered to GitHub with commit history intact.




* data
	* blog
		* tags
		* title
		* text
		* datetime
* activities
	* enter a blog
	* view a blog
	* view a list of blog entries
* parts
	* services
		* BlogListService
		* NetworkService
	* interfaces
		* enter blog
			* title
			* text
			* tags
			* buttons
				* clear
				* save
				* back
		* view blog list
			* blog item list
				* blog item
					* title
					* text
					* tag

* env setup
	* dev - use angularjs-webpack as the starter project
		* npm
		* webpack
		* scss
	* prod - included in package
		* minification
	* server - done
		* rest api
			* blogs
				* get
				* put
				* patch


