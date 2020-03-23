myPortfolio.controller('portfolioCtrl', function($scope) {
	
	$scope.projects = [{
		title: "Anthem: Nimbus Core",
		link: "https://github.com/openanthem/nimbus-core",
		shortDescription: "Nimbus Core is an open source Java/Spring based platform used to create highly configurable web applications.",
		longDescription: "After taking some time off from developing software to pursue my professional tennis aspirations, I returned to Xpanxion and began working with Anthem on an exciting new product. This new product was aimed at becoming the backbone for the replacement of a number of internal workflow applications as well as new applications within the organization. I joined the team after the initial design and implementation of Nimbus. After proving to be a capable developer in using the new framework, was asked to support the core development team in developing new features. I actively assisted in the creation of the CI/CD pipeline and established a proven release strategy based on the Spring Framework's release strategy, delivering over 30 successful releases of Nimbus to Maven Central. During various development iterations, I was asked to provide support to other engineers who were using the framework to create applications by answering general questions and participating in peer programming. Given the amount of instruction needed, I championed the framework's official documentation using AsciiDoc, writing 100+ pages of reference material and examples. During my time with Anthem, I supported at least six different production deployed applications that were using the Nimbus Framework.",
		thumbnailImageUrl: "img/portfolio/anthem-logo.png",
		images:
			[]

	}, {
		title: "Intercontinental Hotels Group - China Web",
		link: "",
		shortDescription: "The user-facing reservation website for all IHG reservations in the Greater China region.",
		longDescription: "From late 2012 until 2016, I was a part of the IHG China Web team. China Web, a Java/Spring web-application, it was my first enterprise-level application through which I held many titles including: SDET, Jr. SDE, SDE, and Technical Lead. The application is responsible for servicing all desktop web-reservations made within the Greater China region through IHG. Utilizing such tools as Ehcache, HAProxy, Amazon AWS, Akamai and more, the application boasts an impressive and scalable cloud-based architecture. A majority of my early work with China Web revolved around developing templates and custom components for our implementation of Day CQ5 (now known as Adobe AEM). Most of my latest work has revolved around maintenance items, small features, and the introduction of new payment services. Overall, my experience with China Web was extremely pleasant and I am honored to have been a part of this wonderful team.",
		thumbnailImageUrl: "img/portfolio/chinaweb-ui-1.png",
		images:
			[{
				url: "img/portfolio/chinaweb-ui-1.png",
				caption: "The homepage for China Web."
			}, {
				url: "img/portfolio/chinaweb-ui-2.png",
				caption: "The search results page for China Web."
			}]

	}, {
		title: "Intercontinental Hotels Group - Global",
		link: "",
		shortDescription: "The user-facing reservation website for all IHG reservations.",
		longDescription: "From late 2016 until my end date at Xpaxion, I worked on the IHG Global website as part of a small team developing small features and bug fixes for the application. The application was a well oiled machine which had an impressive collaborative development environment utilizing chef, vagrant, and kitchen for local development and remote deployment infrastructure.",
		thumbnailImageUrl: "img/logos/ihg-logo.png",
		images: []
	}];
});