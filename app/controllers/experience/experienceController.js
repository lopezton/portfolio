(function() {
    
    'use strict';
    
    angular.module('myPortfolio').controller('ExperienceController', ExperienceController);
    
    ExperienceController.$inject = [];
    
    function ExperienceController() {
        var vm = this;

        vm.headers = {
            main: {
                title: 'Experience'
            },
            workHistory: {
                title: 'Work History',
                subtitle: 'The employers crazy enough to hire me that were satisfied with the results.'
            },
            education: {
                title: 'Education',
                subtitle: 'All the proof on paper that says I should know what I\'m doing.'
            },
            certifications: {
                title: 'Certifications',
                subtitle: 'More documentation stating that I am technically qualified in the following areas:'
            }
        };

        vm.jobs = [
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
                    'Clients: Anthem',
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

        vm.certifications = [
            {
                title: 'Oracle Certified Associate, Java SE 8 Programmer',
                url: 'http://ilearning.oracle.com/oukc/tod/generateecertificateocp?ssn=OC1530870&trackId=OCAJSE8&serId=education.oracle.com&keyId=bfc11a66616a4cee6dc14307cd8024c797df0e91',
                date: 'September 2015',
                details: ''
            }
        ]
    }
})();