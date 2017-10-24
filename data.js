(function () {
    'use strict';

    angular.module('app')
        .factory('MyService', MyService);

    MyService.$inject = [];

    function MyService() {
        var service = {
            getSummary: getSummary,
            getSkills: getSkills,
            getExperience: getExperience,
            getEducation: getEducation,
            getaffiliation:getaffiliation

        }
        return service;

        function getSummary() {
            return {
                profile: 'GhulamSakhi.jpg',
                name: 'Ghulam Sakhi Fikrat',
                title: 'Electrical Engineer',
                location: '2866 Gooding St., Boise, Idaho 83702',
                phone: '(208) 570-0532',
                email: 'fekrat.sakhi@gmail.com',
                information: 'Fully Work Authorized. No Visa Sponsorship Required',
                summaryone: 'Electrical Engineering professional with 5+ years of experience designing transmission lines and working as an electrical site engineer for a U.S.-based construction company designing and constructing the U.S. Embassy in Kabul, Afghanistan'
            }
        }

        function getSkills() {
            return [
                'Extensive experience with the National Electrical code (NEC) and specifications',
                'Familiar with BAS (Building Automation Systems), Fire Alarm, TSS (Technical Security Systems) and Telecommunication systems',
                'Proficient in AutoCAD, Electrical AutoCAD, Dialux, and MS Office',
                'Multilingual in English, Turkish, Farsi and Pashtu'
            ]

        }

        function getExperience() {
            return [{
                title: 'Electrical Engineer, Caddell Construction Co. Kabul, Afghanistan',
                organization: 'U.S. construction firm that designed and constructed new buildings and renovations within the U.S. Embassy compound',
                startYear: '11/2013',
                endYear: ' 04/2017',
                descriptions: [
                    'Oversaw all site electricians and finished the project ahead of schedule within budget',
                    'Applied power, lighting, fire alarm systems, BAS, TSS and Telecom Drawings based on NEC, NFPA-72 and Overseas Building Operations (OBO) specifications',
                    'Performed calculations of electrical equipment, components based on drawings to be ordered',
                    'Reviewed all electrical submittals to ensure they met NEC and OBO specifications',
                    'Conducted all electrical tests, including torque, insulation and GFCI with (fluke tester and torque screw driver)',
                    'Prepared electrical As-Built drawings',
                    'Conducted all electrical inspections with OBO Electrical Engineer',
                    'Prepared QC paper for electrical tests',
                    'Filled monthly electrical invoices'
                ]
            },

            {
                title: 'Electrical Engineer, Afghanistan Investment Support Agency (AISA), Industrial Park Development Department (IPDD)',
                location1: 'Kabul, Afghanistan',
                organization: 'AISA was created to support private sector development in Afghanistan; responsible for development and management of new,modern industrial parks and provided licenses to investors',
                startYear: '01/2012',
                endYear: ' 03/2012',
                descriptions: ['Surveyed and designed transmission lines for industrial parks',
                    'Prepared electrical drawings']
            }
            ]
        };

        function getEducation() {
            return [{
                title: 'Electrical Engineer, Afghanistan Investment Support Agency (AISA), Industrial Park Development Department (IPDD)',
                location1: 'Kabul, Afghanistan',
                organization: 'AISA was created to support private sector development in Afghanistan; responsible for development and management of new,modern industrial parks and provided licenses to investors',
                startYear: '01/2012',
                endYear: ' 03/2012',
                descriptions: ['Surveyed and designed transmission lines for industrial parks',
                    'Prepared electrical drawings']
            }]
        }
        
        function getaffiliation(){
            return [
            'Certificates in Auto CAD, Electrical Auto CAD and Dialux programs, Hekmat Engineering Service Company, Kabul, Afghanistan, 2013',
            'Certificate in Afghanistan Energy Capacity Building Program (AECBP), USAID, Kabul, Afghanistan, 2011'

            ]
                
            
        };

    }

})();
