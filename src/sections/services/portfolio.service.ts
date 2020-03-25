import { Job } from "../../model/job";
import { Certification } from "../../model/certification";
import { Skill } from "../../model/skill";
import { Project } from "../../model/project";

export class PortfolioService {
  
  getCertifications(): Certification[] {
    return [
      {
        title: 'Oracle Certified Associate, Java SE 8 Programmer',
        url: 'http://ilearning.oracle.com/oukc/tod/generateecertificateocp?ssn=OC1530870&trackId=OCAJSE8&serId=education.oracle.com&keyId=bfc11a66616a4cee6dc14307cd8024c797df0e91',
        date: 'September 2015',
        details: ''
      }
    ];
  }

  getJobs(): Job[] {
    return [
      {
        company: {
          name: 'Xpanxion',
          url: 'http://www.xpanxion.com',
          logoUrl: ''
        },
        title: 'Development Practice Lead, Sr. Software Engineer, Manager',
        startDate: 'June 2017',
        endDate: 'November 2019',
        shortDetails: [
          'Client(s): Anthem, IngenioRX',
          'Built and maintained an OSS framework that allowed for the creation of configurable web and web-mobile applications using Java (Spring, Angular, PrimeNG, MongoDB)',
          'Mentored associates by providing one-on-one instruction and creation of educational material for learning various software skills'
        ],
        longDetails: []
      }, {
        company: {
          name: 'Xpanxion',
          url: 'http://www.xpanxion.com',
          logoUrl: ''
        },
        title: 'Sr. Software Engineer, Manager',
        startDate: 'December 2012',
        endDate: 'November 2016',
        shortDetails: [
          'Client(s): IHG (Intercontinental Hotels Group)',
          'Facilitated effective communications between the team, client, and business as the technical lead',
          'Lead an offshore team of three through the agile process for an enterprise­level web application',
          'Assisted in organizational activities, including: employee management, training courses, research and design, and interviewing SDET and SDE candidates'
        ],
        longDetails: []
      }, {
        company: {
          name: 'University of Nebraska Kearney',
          url: 'http://www.unk.edu',
          logoUrl: ''
        },
        title: 'Adjunct Professor',
        startDate: 'August 2016',
        endDate: 'December 2016',
        shortDetails: [
          'Instructed students in advanced concepts of Object Oriented Programming using Java',
          'Provided exceptional guidance and extracurricular learning opportunities to a variety of students',
          'Developed lesson plans according to department curriculum with additional exposure to real-world applications'
        ],
        longDetails: []
      }
    ];
  }

  getProjects(): Project[] {
    return [{
      title: "Anthem: Nimbus Core",
      link: "https://github.com/openanthem/nimbus-core",
      shortDescription: "Nimbus Core is an open source Java/Spring based platform used to create highly configurable web applications.",
      longDescription: "After taking some time off from developing software to pursue my professional tennis aspirations, I returned to Xpanxion and began working with Anthem on an exciting new product. This new product was aimed at becoming the backbone for the replacement of a number of internal workflow applications as well as new applications within the organization. I joined the team after the initial design and implementation of Nimbus. After proving to be a capable developer in using the new framework, was asked to support the core development team in developing new features. I actively assisted in the creation of the CI/CD pipeline and established a proven release strategy based on the Spring Framework's release strategy, delivering over 30 successful releases of Nimbus to Maven Central. During various development iterations, I was asked to provide support to other engineers who were using the framework to create applications by answering general questions and participating in peer programming. Given the amount of instruction needed, I championed the framework's official documentation using AsciiDoc, writing 100+ pages of reference material and examples. During my time with Anthem, I supported at least six different production deployed applications that were using the Nimbus Framework.",
      thumbnailImageUrl: "img/portfolio/anthem-logo.png",
      images: []

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
    }, {
      title: "tonelope.com",
      link: "http://tonelope.com",
      shortDescription: "My personal portfolio website.",
      longDescription: "One of my earliest projects used as a testing ground for several different front end programming languages. This project has primarily been a static website, written several different times using different styling themes and frameworks and in plain HTML, Native Javascript, jQuery, AngularJS, and coming soon: React. While most of the data today exists on my LinkedIn page, I like to have my own personal production deployed content where I can have a visible playground to show off. Someday I'll expand this project to include a blog, instructional content, etc... you know. When I get the time :)",
      thumbnailImageUrl: "img/portfolio/portfolio-ui.png",
      images: []
    }];
  }

  getSkills(): Skill[] {
    return [{
      title: "Spring",
      link: "http://spring.io"
    }, {
      title: "Selenium",
      link: "http://seleniumhq.org"
    }, {
      title: "Sauce Labs",
      link: "http://saucelabs.com"
    }, {
      title: "NodeJS",
      link: "http://seleniumhq.org",
    }, {
      title: "Ehcache",
      link: "http://seleniumhq.org",
    }, {
      title: "jQuery",
      link: "http://jquery.com",
    }, {
      title: "Jenkins",
      link: "http://jenkins-ci.org/"
    }, {
      title: "Javascript",
      link: ""
    }, {
      title: "Java",
      link: "http://java.com"
    }, {
      title: "HTML",
      link: "http://www.w3.org/"
    }, {
      title: "CSS",
      link: "http://www.w3.org/Style/CSS/Overview.en.html"
    }, {
      title: "Adobe CQ5",
      link: "http://www.adobe.com/sea/products/cq.html"
    }, {
      title: "Amazon Web Services",
      link: "http://aws.amazon.com"
    }, {
      title: "Apache Server",
      link: "http://httpd.apache.org/"
    }, {
      title: "AngularJS",
      link: "http://angularjs.org"
    }, {
      title: "Tomcat",
      link: "http://tomcat.apache.org"
    }, {
      title: "Rightscale",
      link: "http://rightscale.com"
    }, {
      title: "React",
      link: ""
    }, {
      title: "Docker",
      link: ""
    }, {
      title: "AsciiDoc",
      link: ""
    }, {
      title: "Angular",
      link: ""
    }, {
      title: "PrimeNG",
      link: ""
    }, {
      title: "Bootstrap",
      link: ""
    }, {
      title: "Git",
      link: ""
    }, {
      title: "Splunk",
      link: ""
    }, {
      title: "Typescript",
      link: ""
    }, {
      title: "RxJS",
      link: ""
    }, {
      title: "SOAP/REST",
      link: ""
    }];
  }
}