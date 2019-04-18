from gather import Gather

feri = Gather('./feri.xlsx')

data = feri.excelData

feri.saveData()

for d in data['data']:
    print(d)

# # Export JSON data
# export_data = json.dumps(excelData)
# export_file = open('data.json', 'w')
# export_file.write(export_data)