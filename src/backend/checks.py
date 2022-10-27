import mysql.connector

#establishing the connection
conn = mysql.connector.connect(
   user='root', password='', host='localhost', database='cs308')

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

#Retrieving single row
sql = '''SELECT * from user_information'''

#Executing the query
cursor.execute(sql)

#Fetching 1st row from the table
result = cursor.fetchall()
print(result)
for row in result:
   print("id: ", row[0])

#Closing the connection
conn.close()
