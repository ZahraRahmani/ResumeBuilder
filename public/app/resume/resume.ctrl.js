(function(){
'use strict'

       angular.module('app')
       .controller('ResumeCtrl', ResumeCtrl);
    
        ResumeCtrl.$inject = ['$scope','ResumeService'];
    
    
        function ResumeCtrl($scope,ResumeService) {
            $scope.editSummary=editSummary;
            $scope.saveSummary=saveSummary;
            $scope.showSummaryForm=false;
            $scope.editSkills=editSkills;
            $scope.saveSkills=saveSkills;
            $scope.showSkillsForm=false;
            $scope.editaffiliation=editaffiliation;
            $scope.saveaffiliation=saveaffiliation;
            $scope.showaffiliationForm=false;
            $scope.editExperience=editExperience;
            $scope.saveExperience=saveExperience;
            $scope.showExperienceForm=false;

    
            activate();
    
            function activate(){
            $scope.education=ResumeService.getEducation();
            $scope.experience=ResumeService.getExperience();
            $scope.skills=ResumeService.getSkills();
            $scope.summary=ResumeService.getSummary();
            $scope.affiliation=ResumeService.getaffiliation();
    
            
            }
            function editSummary(){
              
              $scope.showSummaryForm=true;
            }
            function saveSummary(){
              $scope.showSummaryForm=false;
              ResumeService.setSummary($scope.summary)
            }
    
            function editSkills(){
              
              $scope.showSkillsForm=true;
            }
            function saveSkills(){
              $scope.showSkillsForm=false;
              ResumeService.setSkills($scope.skills)
            }
    
            function editaffiliation(){
            
              $scope.showaffiliationForm=true;
            }
            function saveaffiliation(){
              $scope.showaffiliationForm=false;
              ResumeService.setaffiliation($scope.affiliation)
             
            }
            function editExperience(){
               
                $scope.showExperienceForm=true;
              }
              function saveExperience(){
                  console.log('I work')
                $scope.showExperienceForm=false;
                ResumeService.setExperience($scope.experience)
              }
    
            
    
        }
    
    })();