import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def register():
########## REGISTER TEST ##############
    driver = webdriver.Chrome()
    # Test successful registration
    driver.get('http://localhost:3000/register')
    email_field = driver.find_element_by_name('name')
    email_field.send_keys('testUser')
    email_field = driver.find_element_by_name('email')
    email_field.send_keys('test@mail.com')
    password_field = driver.find_element_by_name('password')
    password_field.send_keys('test123')
    confirm_password_field = driver.find_element_by_name('confirmPassword')
    confirm_password_field.send_keys('test123')
    driver.find_element(By.CSS_SELECTOR, 'button[type=submit]').click()
    WebDriverWait(driver, 10).until(
        EC.url_to_be('http://localhost:3000/')
    )

    # Test error message for mismatched passwords
    driver.get('http://localhost:3000/register')
    email_field = driver.find_element_by_name('name')
    email_field.send_keys('testUser')
    email_field = driver.find_element_by_name('email')
    email_field.send_keys('test@mail.com')
    password_field = driver.find_element_by_name('password')
    password_field.send_keys('test1111')
    confirm_password_field = driver.find_element_by_name('confirmPassword')
    confirm_password_field.send_keys('invalid')
    driver.find_element(By.CSS_SELECTOR, 'button[type=submit]').click()
    error_message = driver.find_element(By.CSS_SELECTOR, '.error').text
    assert error_message == 'Passwords do not match'
    driver.close()

def load_home_page():
########### LOAD HOMEPAGE TEST ############
    driver = webdriver.Chrome()
    driver.get("http://localhost:8000/login")
    # Test the home page
    driver.get('http://localhost:3000/')
    assert driver.title == 'My MERN App'
    driver.close()
    
def login():
########## LOGIN TEST #############
    driver = webdriver.Chrome()
    # Test the failed login form
    driver.get('http://localhost:3000/login')
    email_field = driver.find_element_by_name('email')
    email_field.send_keys('user@mail.com')
    password_field = driver.find_element_by_name('password')
    password_field.send_keys('user123')
    driver.find_element(By.CSS_SELECTOR, 'button[type=submit]').click()
    WebDriverWait(driver, 10).until(
        EC.url_to_be('http://localhost:3000/')
    )

    # Test the login form
    driver.get('http://localhost:3000/login')
    email_field = driver.find_element_by_name('email')
    email_field.send_keys('user111@mail.com')
    password_field = driver.find_element_by_name('password')
    password_field.send_keys('user122')
    confirm_password_field.send_keys('invalid')
    driver.find_element(By.CSS_SELECTOR, 'button[type=submit]').click()
    error_message = driver.find_element(By.CSS_SELECTOR, '.error').text
    assert error_message == 'credentials are not correct'
    driver.close()

def like_button_test():
############ LIKE BUTTON TEST ############
    driver = webdriver.Chrome()
    driver.get("http://localhost:8000/login")
    email_field = driver.find_element_by_name('email')
    email_field.send_keys('user111@mail.com')
    password_field = driver.find_element_by_name('password')
    password_field.send_keys('user122')
    # Get the initial like count
    like_count_element = driver.find_element(By.CSS_SELECTOR, '.like-count')
    like_count = int(like_count_element.text)

    # Click the like button
    driver.find_element(By.CSS_SELECTOR, '.like').click()

    # Wait for the page to reload
    WebDriverWait(driver, 10).until(
        EC.staleness_of(like_count_element)
    )

    # Get the updated like count
    like_count_element = driver.find_element(By.CSS_SELECTOR, '.like-count')
    updated_like_count = int(like_count_element.text)

    # Verify that the like count has incremented by one
    assert updated_like_count == like_count + 1
    driver.close()
    
def delete_user_by_admin():   
############ DELETE USER BY ADMIN TEST ############
    driver = webdriver.Chrome()
    driver.get("http://localhost:8000/loginAdmin")

    # log in as an admin
    driver.find_element_by_id("email").send_keys("admin@mail.com")
    driver.find_element_by_id("password").send_keys("admin123")
    driver.find_element_by_id(By.CSS_SELECTOR, 'button[type=submit]').click()
    # navigate to the user management page
    driver.get("http://localhost:8000/users")
    # select the user to delete
    # driver.find_element_by_xpath("//td[text()='test_user']/..//input[@type='checkbox']").click()
    # click the delete button
    driver.find_element_by_id(By.CSS_SELECTOR, 'button[type=delete]').click()
 
    # verify that the user has been deleted
    # user_deleted = driver.find_elements_by_xpath("//td[text()='test_user']")
    # assert len(user_deleted) == 0
    driver.close()

def verify_user_by_admin():   
############ VERIFY USER BY ADMIN TEST ############  
    driver = webdriver.Chrome()
    driver.get("http://localhost:8000/loginAdmin")

    # log in as an admin
    driver.find_element_by_id("email").send_keys("admin@mail.com")
    driver.find_element_by_id("password").send_keys("admin123")
    driver.find_element_by_id(By.CSS_SELECTOR, 'button[type=submit]').click()
    # navigate to the user settings page for the user to verify
    driver.get("http://localhost:8000/users")
    # click the verify button
    driver.find_element_by_id(By.CSS_SELECTOR, 'button[type=verify]').click()
    # verify that the user has been verified
    # verified_text = driver.find_element_by_id("verified_text").text
    # assert verified_text == "Verified"
    driver.close()
    
def user_delete_account():
    # create a new Chrome browser instance
    driver = webdriver.Chrome()
    # navigate to the login page
    driver.get("http://localhost:8000/login")

    # log in as a user
    driver.find_element_by_id("email").send_keys("delete@mail.com")
    driver.find_element_by_id("password").send_keys("delete123")
    driver.find_element_by_id(By.CSS_SELECTOR, 'button[type=submit]').click()
    # navigate to the user's profile page
    driver.get("http://localhost:8000/profile")
    # click the settings button
    driver.find_element_by_id("profile settings").click()
    # click the delete account button
    driver.get("http://localhost:8000/profilesettings")
    driver.find_element_by_id("delete my account").click()
    # confirm the delete action
    # driver.find_element_by_id("confirm_button").click()
    # verify that the user's account has been deleted
    # login_text = driver.find_element_by_id("login_text").text
    # assert login_text == "Log In"
    driver.close()
    
def user_delete_account():
    # create a new Chrome browser instance
    driver = webdriver.Chrome()
    # navigate to the login page
    driver.get("http://localhost:8000/login")

    # log in as a user
    driver.find_element_by_id("email").send_keys("user@mail.com")
    driver.find_element_by_id("password").send_keys("user123")
    driver.find_element_by_id(By.CSS_SELECTOR, 'button[type=submit]').click()
    # navigate to the user's profile page
    driver.get("http://localhost:8000")
    # click the settings button
    driver.find_element_by_id("view your team").click()
    # click the delete account button
    driver.get("http://localhost:8000/teams")
    driver.find_element_by_id("delete team").click()
    # confirm the delete action
    # driver.find_element_by_id("confirm_button").click()
    # verify that the user's account has been deleted
    # login_text = driver.find_element_by_id("login_text").text
    # assert login_text == "Log In"
    driver.close()
    
if __name__ == "__main__":
    register()
    load_home_page()
    login()
    like_button_test()
    delete_user_by_admin()
    verify_user_by_admin()
    user_delete_account()
    user_delete_account()
    
    
