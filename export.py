from feri import Feri
import json

feri = Feri('./feri.xlsx')

# Data object
data = feri.excelData

# Save all data
feri.saveData()

# Print data
for d in data['data']:
    print(d)

# # Export JSON data
export_data = json.dumps(data)
export_file = open('data.json', 'w')
export_file.write(export_data)
export_file.close()

print('done')