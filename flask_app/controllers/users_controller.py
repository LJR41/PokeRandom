from flask_app import app
from flask import render_template,redirect,request,session,flash
# from flask_app.models.user_model import User
# from flask_app.models.sighting_model import Sighting
from flask_app import DATABASE

@app.route('/')
def display_home():
    return render_template('reg_login.html')


@app.route('/home')
def display_dash():
    # if 'user_id' not in session:
    #     return redirect ('/')
    return render_template('home.html')

# @app.route('/sightings/new')
# def sighting_form():
#     if 'user_id' not in session:
#         return redirect ('/')
#     data = {
#         'id' : session['user_id']
#     }
#     one_user = User.get_by_id(data)
#     return render_template('new_sighting.html', one_user=one_user)

# @app.route('/sightings/create', methods=['POST'])
# def new_sighting():
#     if 'user_id' not in session:
#         return redirect ('/dashboard')
#     if not Sighting.validate_sighting(request.form):
#         return redirect('/sightings/new')
#     data = {
#         **request.form,
#         'user_id' : session['user_id']
#     }
#     Sighting.new_sighting(data)
#     return redirect ('/dashboard')

# @app.route('/sightings/<int:id>/delete')
# def delete_sighting(id):
#     data = {
#         'id' : id
#     }
#     Sighting.delete_sighting(data)
#     return redirect ('/dashboard')

# @app.route('/sightings/<int:id>/view')
# def show_sighting(id):
#     if 'user_id' not in session:
#         return redirect ('/dashboard')
#     data1 = {
#         'id' : id
#     }
#     data2 = {
#         'id' : session['user_id']
#     }
#     one_user = User.get_by_id(data2)
#     one_sighting = Sighting.get_one_sighting(data1)
#     return render_template('view.html', one_user=one_user, one_sighting=one_sighting)

# @app.route('/sightings/<int:id>/edit')
# def edit_sighting(id):
#     if 'user_id' not in session:
#         return redirect ('/dashboard')
#     data = {
#         'id' : id
#     }
#     one_sighting = Sighting.get_one_sighting(data)
#     return render_template('edit_sighting.html', one_sighting=one_sighting)

# @app.route('/sightings/<int:id>/update', methods=['POST'])
# def update_sighting(id):
#     data = {
#         **request.form,
#         'id' : id
#     }
#     if not Sighting.validate_sighting(request.form):
#         return redirect(f'/sightings/{id}/edit')
#     Sighting.edit_sighting(data)
#     return redirect ('/dashboard')