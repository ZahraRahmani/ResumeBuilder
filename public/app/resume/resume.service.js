(function () {
    'use strict';

    angular.module('app')
   .factory('ResumeService', ResumeService);

    ResumeService.$inject = [];

    function ResumeService() {
    var resume=initResume();

        var service = {
           getSummary,
           setSummary,
           getSkills,
           setSkills,          
           getExperience,
           setExperience,
           getEducation,
           getaffiliation,
           setaffiliation,
           getExperience,
           setExperience

        }
        return service;

        function getSummary() {
            return resume.summary;
        }
        function setSummary(data){
            resume.summary=data;
        }

        function getSkills() {
           
            return resume.skills;

        }
        function setSkills(data){
            resume.skills=data;
        }

        function getExperience() {
            return resume.experience;
        }
        function setExperience(data){
            resume.experience=data ;     
        }


        function getEducation() {
            return resume.education;
        }
        function setEducation(data){
             resume.eduation=data;
        }
        
        function getaffiliation(){
            return resume.affiliation;                  
        }
        function setaffiliation(data){
            resume.affiliation=data;
        }
        function getExperience(){
            return resume.experience;
        }
        function setExperience(data){
            resume.experience=data;
        }


        

    };
    function initResume(){
        return{
            summary:
            {
                profile: 'images/GhulamSakhi.jpg',
                name: 'Ghulam Sakhi Fikrat',
                title: 'Electrical Engineer',
                location: '2866 Gooding St., Boise, Idaho 83702',
                phone: '(208) 570-0532',
                email: 'fekrat.sakhi@gmail.com',
                information: 'Fully Work Authorized. No Visa Sponsorship Required',
                summaryone: 'Electrical Engineering professional with 5+ years of experience designing transmission lines and working as an electrical site engineer for a U.S.-based construction company designing and constructing the U.S. Embassy in Kabul, Afghanistan'
            },
            skills:[
                    {id:1,skill:'Extensive experience with the National Electrical code (NEC) and specifications'},
                    {id:2,skill:'Familiar with BAS (Building Automation Systems), Fire Alarm, TSS (Technical Security Systems) and Telecommunication systems'},
                    {id:3,skill:'Proficient in AutoCAD, Electrical AutoCAD, Dialux, and MS Office'},
                    {id:4,skill:'Multilingual in English, Turkish, Farsi and Pashtu'}
                ],
            experience :[{
                    title: 'Electrical Engineer, Caddell Construction Co. Kabul, Afghanistan',
                    organization: 'U.S. construction firm that designed and constructed new buildings and renovations within the U.S. Embassy compound',
                    startYear: '11/2013',
                    endYear: ' 04/2017',
                    descriptions: [
                        {id:1,descript:'Oversaw all site electricians and finished the project ahead of schedule within budget'},
                        {id:2,descript:'Applied power, lighting, fire alarm systems, BAS, TSS and Telecom Drawings based on NEC, NFPA-72 and Overseas Building Operations (OBO) specifications'},
                        {id:3,descript:'Performed calculations of electrical equipment, components based on drawings to be ordered'},
                        {id:4,descript:'Reviewed all electrical submittals to ensure they met NEC and OBO specifications'},
                        {id:5,descript:'Conducted all electrical tests, including torque, insulation and GFCI with (fluke tester and torque screw driver)'},
                        {id:6,descript:'Prepared electrical As-Built drawings'},
                        {id:7,descript:'Conducted all electrical inspections with OBO Electrical Engineer'},
                        {id:8,descript:'Prepared QC paper for electrical tests'},
                        {id:9,descript:'Filled monthly electrical invoices'}
                    ]
                },
    
                {
                    title: 'Electrical Engineer, Afghanistan Investment Support Agency (AISA), Industrial Park Development Department (IPDD)',
                    location1: 'Kabul, Afghanistan',
                    organization: 'AISA was created to support private sector development in Afghanistan; responsible for development and management of new,modern industrial parks and provided licenses to investors',
                    startYear: '01/2012',
                    endYear: ' 03/2012',
                    descriptions: [{id:1,descript:'Surveyed and designed transmission lines for industrial parks'},
                        {id:2,descript:'Prepared electrical drawings'}]
                }
                ],
                education:[{
                        title: 'Electrical Engineer, Afghanistan Investment Support Agency (AISA), Industrial Park Development Department (IPDD)',
                        location1: 'Kabul, Afghanistan',
                        organization: 'AISA was created to support private sector development in Afghanistan; responsible for development and management of new,modern industrial parks and provided licenses to investors',
                        startYear: '01/2012',
                        endYear: ' 03/2012',
                        descriptions: ['Surveyed and designed transmission lines for industrial parks',
                            'Prepared electrical drawings']
                    }],

                    affiliation: [
                        {id:1,affiliation:'Certificates in Auto CAD, Electrical Auto CAD and Dialux programs, Hekmat Engineering Service Company, Kabul, Afghanistan, 2013'},
                        {id:2,affiliation: 'in Afghanistan Energy Capacity Building Program (AECBP), USAID, Kabul, Afghanistan, 2011'}
            
                        ]              
        }
    }

})();
