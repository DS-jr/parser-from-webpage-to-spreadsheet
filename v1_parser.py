import requests, gspread, os
from bs4 import BeautifulSoup
from oauth2client.service_account import ServiceAccountCredentials


url = '...' # Paste URL of the webpage you need to parse
response = requests.get(url)

if response.status_code == 200:
    webpage_content = response.text
    # print(webpage_content)
    # print(type(webpage_content))
else:
    print("FaiLed to fEtch weBpage coNtent.\n", response.status_code)
    exit() 


soup = BeautifulSoup(webpage_content, 'html.parser')
# print(type(soup))


# keyfile_path = '...' # Paste path/to/your/credentials.json (download it from Google Developers Console when customising Google Sheets API)
# scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
# credentials = ServiceAccountCredentials.from_json_keyfile_name(keyfile_path, scope) 
# client = gspread.authorize(credentials)

# spreadsheet = client.open('...') # Paste the name of your GoogleSheet file (create it manually in advance)
# worksheet = spreadsheet.get_worksheet(0) 
# # data_to_insert = [
# #     ['Data1', 'Data2', 'Data3'],
# #     # ...
# # ]
# worksheet.update('B2', data_to_insert) # Update starting from cell B2 



# # Find all <h2> elements within a specific class
# crypto_names = soup.find_all('h2', class_='h3')

# # Extract text content from the found elements
# crypto_names_list = [name.get_text(strip=True) for name in crypto_names]

# # Define the file path (same directory as the script)
# file_path = os.path.join(os.path.dirname(__file__), 'crypto_names.txt')

# # Write the data to the .txt file
# with open(file_path, 'w') as file:
#     for crypto_name in crypto_names_list:
#         file.write(crypto_name + '\n')
# print("Data saved to 'crypto_names.txt' successfully.")



# # Find all HTML elements
# all_elements = soup.find_all()

# # Define the file path (same directory as the script)
# file_path = os.path.join(os.path.dirname(__file__), 'all_data.txt')

# # Write the data to the .txt file
# with open(file_path, 'w', encoding='utf-8') as file:
#     for element in all_elements:
#         file.write(str(element) + '\n')

# print("All data saved to 'all_data.txt' successfully.")



# Find all channel usernames (starting with '@') within <h2> elements
# channel_usernames = []
# for h2_tag in soup.find_all('h2'):
#     username = h2_tag.get_text(strip=True)
#     if username.startswith('@'):
#         channel_usernames.append(username)
# print(channel_usernames)

