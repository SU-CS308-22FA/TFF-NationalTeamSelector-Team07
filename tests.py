from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_cases_for_app():
    driver = webdriver.Chrome()

########## REGISTER TEST ##############

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

########### LOAD HOMEPAGE TEST ############

    # Test the home page
    driver.get('http://localhost:3000/')
    assert driver.title == 'My MERN App'

########## LOGIN TEST #############

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


############ LIKE BUTTON TEST ############

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

    driver.quit()