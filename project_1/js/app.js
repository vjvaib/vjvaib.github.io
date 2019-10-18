//let userInput = "headache";

$(() => {

  $('form').on('submit', (event)=>{

    event.preventDefault();

        const userInput = $('input[type="text"]').val();




  $.ajax({
    url: 'https://clinicaltrials.gov/api/query/full_studies?fmt=JSON&expr=' + userInput
  }).then(
    (data) => {
      console.log("api is working!");
      console.log(data);
      let newData = JSON.parse(data);
      //console.log(newData);


      
      //dom manipulation to get the required data from API.

      $('#descr').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.DescriptionModule.BriefSummary);

      $('#express').html(newData.FullStudiesResponse.Expression);

      $('#title').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.IdentificationModule.OfficialTitle);

      $('#elig').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.IdentificationModule.OfficialTitle);

      $('#org').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.IdentificationModule.Organization.OrgFullName);

      $('#complet').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.StatusModule.PrimaryCompletionDateStruct.PrimaryCompletionDate);

      $('#spec').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.ConditionsModule.ConditionList.Condition[0]);

      $('#crite').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.EligibilityModule.EligibilityCriteria);


     $('#cont').html(newData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.ContactsLocationsModule.CentralContactList.CentralContact[0].CentralContactName);

    },
    () => {
      console.log('bad request');
    }
  );

})
});
