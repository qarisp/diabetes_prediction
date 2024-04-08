const Home = () => {
  return (
    <div className="container">
        <h1 className="d-flex justify-content-center">CDC – 2014 BRFSS Survey Data and Documentation</h1>
        <div className="dataset-details">
          <p>The Behavioral Risk Factor Surveillance System (BRFSS) is a health-related telephone survey that is collected annually by the CDC. Each year, the survey collects responses from over 400,000 Americans on health-related risk behaviors, chronic health conditions, and the use of preventative services. It has been conducted every year since 1984. For this project, a csv of the dataset available on Kaggle for the year 2015 was used. This original dataset contains responses from 441,455 individuals and has 330 features. These features are either questions directly asked of participants, or calculated variables based on individual participant responses.</p>
          <span>Source:</span>
          <ul>
            <li><a href="https://www.cdc.gov/brfss/annual_data/annual_2014.html">CDC</a></li>
            <li><a href="https://www.kaggle.com/datasets/alexteboul/diabetes-health-indicators-dataset">Kaggle</a></li>
          </ul>
          <span>Variable:</span>
          <ul>
            <li>Diabetes_binary: 0 = no diabetes, 1 = prediabetes or diabetes</li>
            <li>HighBP: 0 = No High Blood Pressure, 1 = High Blood Pressure</li>
            <li>HighChol: 0 = No High Cholesterol, 1 = High Cholesterol</li>
            <li>CholCheck: 0 = No Cholesterol Check In 5 Years, 1 = Have Cholesterol Check In 5 Years</li>
            <li>BMI: Body Mass Index</li>
            <li>Smoker (Note: Have smoked atleast 100 cigarettes in their entire life): 0 = No, 1 = Yes</li>
            <li>Stroke: 0 = Never had stroke before, 1 = Had stroke before</li>
            <li>HeartDiseaseorAttack: coronary heart disease (CHD) or myocardial infarction (MI) 0 = no 1 = yes</li>
            <li>PhysActivity: physical activity in past 30 days - not including job 0 = no 1 = yes</li>
            <li>Fruits: Consume Fruit 1 or more times per day 0 = no 1 = yes</li>
            <li>Veggies: Consume Vegetables 1 or more times per day 0 = no 1 = yes</li>
            <li>HvyAlcoholConsump: Heavy drinkers (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week) 0 = no 1 = yes</li>
            <li>AnyHealthcare: Have any kind of health care coverage, including health insurance, prepaid plans such as HMO, etc. 0 = no 1 = yes</li>
            <li>NoDocbcCost: Was there a time in the past 12 months when you needed to see a doctor but could not because of cost? 0 = no 1 = yes</li>
            <li>GenHlth: Would you say that in general your health is: scale 1-5 1 = excellent 2 = very good 3 = good 4 = fair 5 = poor</li>
            <li>MentHlth: Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good? scale 1-30 days</li>
            <li>PhysHlth: Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good? scale 1-30 days</li>
            <li>DiffWalk: Do you have serious difficulty walking or climbing stairs? 0 = no 1 = yes</li>
            <li>Sex: 0 = female 1 = male</li>
            <li>Age: 13-level age category 1 = 18-24 9 = 60-64 13 = 80 or older</li>
            <li>Education: Education level (EDUCA see codebook) scale 1-6 1 = Never attended school or only kindergarten 2 = Grades 1 through 8 (Elementary) 3 = Grades 9 through 11 (Some high school) 4 = Grade 12 or GED (High school graduate) 5 = College 1 year to 3 years (Some college or technical school) 6 = College 4 years or more (College graduate)</li>
            <li>Income: Income scale (INCOME2 see codebook) scale 1-8</li>
          </ul>
        </div>
    </div>
  )
}

export default Home