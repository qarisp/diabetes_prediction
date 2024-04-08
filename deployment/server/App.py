from flask import Flask, request
from flask_cors import CORS
import pickle

rf_model = pickle.load(open("model/rf_model.pkl", "rb"))

app = Flask(__name__)
cors = CORS(app, resources={r"/predict": {"origins": "*"}})


# Random Forest Model
@app.route("/predict", methods=['POST'])
def predict():
    try:
        form_data = request.json
        high_bp = int(form_data['high_bp'])
        high_chol = int(form_data['high_chol'])
        chol_check = int(form_data['chol_check'])
        smoker = int(form_data['smoker'])
        stroke = int(form_data['stroke'])
        heart_disease = int(form_data['heart_disease'])
        phys_activity = int(form_data['phys_activity'])
        fruits = int(form_data['fruits'])
        veggies = int(form_data['veggies'])
        heavy_alch = int(form_data['heavy_alch'])
        any_healthcare = int(form_data['any_healthcare'])
        gen_health = int(form_data['gen_health'])
        ment_health = int(form_data['ment_health'])
        phys_health = int(form_data['phys_health'])
        diff_walking = int(form_data['diff_walking'])
        age = int(form_data['age'])
        bmi_group = float(form_data['bmi'])
        
        
        if bmi_group < 18.5:
            bmi_group = 1
        elif bmi_group >= 18.5 and bmi_group < 25:
            bmi_group = 2
        elif bmi_group >= 25 and bmi_group < 30 :
            bmi_group = 3
        elif bmi_group >= 30 and bmi_group < 35:
            bmi_group = 4
        elif bmi_group >= 35:
            bmi_group = 5

        data_list = [
            [
                high_bp,
                high_chol,
                chol_check,
                smoker,
                stroke,
                heart_disease,
                phys_activity,
                fruits,
                veggies,
                heavy_alch,
                any_healthcare,
                gen_health,
                ment_health,
                phys_health,
                diff_walking,
                age,
                bmi_group
            ]
        ]

        prediction = rf_model.predict(data_list)

        output = {
            0: "not at risk of diabetes",
            1: "at risk of prediabetes or diabetes"
        }

        return 'You are {}'.format(output[prediction[0]])
    
    except Exception as e:
        # Handle any errors that occur during prediction
        return str(e), 400  # Return error message with status code 400



if __name__ == "__main__":
    app.run(port=8080)