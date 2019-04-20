from feri import Feri
import json

feri = Feri('./feri.xlsx')

# Save all data
feri.saveData()

# Print data
print('\nmetadata:')
for d in feri.excelData['metadata']:
    print(d)

print('\ndata:')
for d in feri.excelData['data']:
    print(d)

# # Export JSON data
export_data = json.dumps(feri.excelData)
export_file = open('data.json', 'w')
export_file.write(export_data)
export_file.close()

# print('done')