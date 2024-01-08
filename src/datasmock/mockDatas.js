import { formatDate } from "../utils/utils";

export const formatedData = (data)=> {
    let formattedData = data.map(entry => {
        let newEntry = {...entry};
        if(newEntry.startDate) {
            let startDate = formatDate(newEntry.startDate);
            newEntry.startDate = startDate
        }
        if(newEntry.dateOfBirth) {
            let dateOfBirth = formatDate(newEntry.dateOfBirth);
            newEntry.dateOfBirth = dateOfBirth;
        }
        
        return newEntry;
    });

    return formattedData;
};


export const data = [{ 
    firstName: 'Maëly', 
    lastName: 'Kirman', 
    startDate: '11/20/2016', 
    department: 'Training', 
    dateOfBirth: '5/25/1947', 
    street: '2 Granby Alley', 
    city: 'Vanimo' 
},
{ firstName: 'Bérengère', lastName: 'Humbatch', startDate: '8/26/2020', department: 'Marketing', dateOfBirth: '3/8/2000', street: '51 Boyd Plaza', city: 'Žalec', zipCode: '3310' },
{ firstName: 'Geneviève', lastName: 'Greenman', startDate: '2/24/2014', department: 'Product Management', dateOfBirth: '9/15/2012', street: '78736 Buena Vista Place', city: 'Fenjie' },
{ firstName: 'Yè', lastName: 'Martinelli', startDate: '1/23/2021', department: 'Marketing', dateOfBirth: '11/21/1990', street: '52 Armistice Court', city: 'São Martinho do Campo', state: 'Porto', zipCode: '4795-446' },
{ firstName: 'Maëlann', lastName: 'Iddenden', startDate: '1/31/2007', department: 'Human Resources', dateOfBirth: '5/13/1963', street: '85263 Commercial Plaza', city: 'Jiujie' },
{ firstName: 'Crééz', lastName: 'Findlay', startDate: '7/10/2012', department: 'Human Resources', dateOfBirth: '6/5/1985', street: '1 Melby Road', city: 'Lukhovka', zipCode: '450075' },
{ firstName: 'Mén', lastName: 'Derx', startDate: '10/5/2005', department: 'Training', dateOfBirth: '9/7/2002', street: '62 2nd Place', city: 'Daoqiao' },
{ firstName: 'André', lastName: 'Waslin', startDate: '8/3/2022', department: 'Engineering', dateOfBirth: '6/9/2010', street: '0709 Cordelia Circle', city: 'Old Harbour Bay' },
{ firstName: 'Måns', lastName: 'Saphir', startDate: '6/2/2014', department: 'Sales', dateOfBirth: '10/6/1999', street: '36898 Continental Point', city: 'Piasek', zipCode: '43-211' },
{ firstName: 'Lèi', lastName: 'Guillem', startDate: '1/24/2013', department: 'Business Development', dateOfBirth: '10/13/1994', street: '125 Claremont Circle', city: 'Chittagong', zipCode: '4000' },
{ firstName: 'Cloé', lastName: 'Gamble', startDate: '11/25/2009', department: 'Engineering', dateOfBirth: '8/5/1985', street: '9053 Evergreen Way', city: 'Savitaipale', zipCode: '54801' },
{ firstName: 'Yú', lastName: 'Torrent', startDate: '5/17/2014', department: 'Human Resources', dateOfBirth: '12/13/1958', street: '39 Acker Plaza', city: 'San Benito', zipCode: '8423' },
{ firstName: 'Hélèna', lastName: 'Rosellini', startDate: '12/19/2011', department: 'Product Management', dateOfBirth: '6/26/1943', street: '7638 Steensland Crossing', city: 'Da’an' },
{ firstName: 'Östen', lastName: 'Shalloe', startDate: '6/16/2009', department: 'Marketing', dateOfBirth: '2/17/1981', street: '4053 Sutherland Drive', city: 'Qŭrghonteppa' },
{ firstName: 'Börje', lastName: 'Semeniuk', startDate: '5/29/2015', department: 'Marketing', dateOfBirth: '5/7/1945', street: '7 Waywood Way', city: 'Altamira', zipCode: '68370-000' },
{ firstName: 'Maëline', lastName: 'Hlavecek', startDate: '5/12/2007', department: 'Engineering', dateOfBirth: '8/3/2000', street: '2232 Hansons Center', city: 'Šuto Orizare', zipCode: '1040' },
{ firstName: 'Maëlla', lastName: 'Praton', startDate: '2/14/2008', department: 'Sales', dateOfBirth: '5/12/1994', street: '8 Center Junction', city: 'Umpak' },
{ firstName: 'Amélie', lastName: 'Trineman', startDate: '5/20/2007', department: 'Research and Development', dateOfBirth: '7/27/1943', street: '9 Artisan Place', city: 'Dajing' },
{ firstName: 'Dorothée', lastName: 'Stirgess', startDate: '10/10/2004', department: 'Product Management', dateOfBirth: '4/23/1966', street: '5369 Hansons Hill', city: 'Września', zipCode: '62-314' },
{ firstName: 'Aí', lastName: 'Matuszkiewicz', startDate: '6/4/2023', department: 'Human Resources', dateOfBirth: '2/2/2010', street: '954 Shopko Point', city: 'Sydney Mines', state: 'Nova Scotia', zipCode: 'B1V' },
{ firstName: 'Maïlys', lastName: 'Sinnocke', startDate: '4/20/2017', department: 'Engineering', dateOfBirth: '5/31/2014', street: '353 Gateway Court', city: 'Sinisian', zipCode: '4212' },
{ firstName: 'Françoise', lastName: 'Di Matteo', startDate: '3/23/2002', department: 'Business Development', dateOfBirth: '12/26/1959', street: '6643 Corscot Road', city: 'Habingkloang' },
{ firstName: 'Bérangère', lastName: 'Philippsohn', startDate: '9/25/2018', department: 'Engineering', dateOfBirth: '11/5/1941', street: '25 Sloan Lane', city: 'Xiguantun Muguzu Manzuxiang' },
{ firstName: 'Méthode', lastName: 'Pepis', startDate: '10/9/2006', department: 'Legal', dateOfBirth: '5/20/1980', street: '8 Larry Parkway', city: 'Severnyy', zipCode: '346763' },
{ firstName: 'Mà', lastName: 'Topliss', startDate: '8/6/2023', department: 'Accounting', dateOfBirth: '5/29/1979', street: '50 Crescent Oaks Road', city: 'Altanbulag' },
{ firstName: 'Mélodie', lastName: 'Bunkle', startDate: '6/27/2000', department: 'Business Development', dateOfBirth: '4/1/1946', street: '42 John Wall Terrace', city: 'Beiyuan' },
{ firstName: 'Ophélie', lastName: 'Simonou', startDate: '3/20/2018', department: 'Business Development', dateOfBirth: '6/14/1948', street: '78 Anthes Terrace', city: 'Zelenogorsk', zipCode: '663694' },
{ firstName: 'Méng', lastName: 'Woodings', startDate: '10/14/2012', department: 'Sales', dateOfBirth: '2/11/1997', street: '2507 Prairie Rose Lane', city: 'Brezovica', zipCode: '33411' },
{ firstName: 'Régine', lastName: 'OScandall', startDate: '11 / 24 / 2004', department: 'Legal', dateOfBirth: '7 / 29 / 2010', street: '5 Packers Point', city: 'Iaçu', zipCode: '46860-000'},
{ firstName: 'Adélie', lastName: 'Pembery', startDate: '2/5/2002', department: 'Sales', dateOfBirth: '6/18/1940', street: '91816 Orin Court', city: 'Buerarema', zipCode: '45615-000' },
{ firstName: 'Méghane', lastName: 'Chopy', startDate: '6/8/2005', department: 'Services', dateOfBirth: '11/5/1961', street: '854 Sage Way', city: 'Kaparéllion' },
{ firstName: 'Nadège', lastName: 'Ailmer', startDate: '10/7/2023', department: 'Support', dateOfBirth: '2/15/2002', street: '09 Del Mar Place', city: 'Krajan' },
{ firstName: 'Audréanne', lastName: 'Mowen', startDate: '9/13/2002', department: 'Services', dateOfBirth: '3/21/1994', street: '1213 Warbler Drive', city: 'Luoping' },
{ firstName: 'Zoé', lastName: 'Dingley', startDate: '9/21/2000', department: 'Services', dateOfBirth: '9/30/1959', street: '5298 International Terrace', city: 'Gbadolite' },
{ firstName: 'Gösta', lastName: 'Goghin', startDate: '7/18/2001', department: 'Services', dateOfBirth: '4/27/1991', street: '8537 Sycamore Hill', city: 'Vrýses' },
{ firstName: 'Régine', lastName: 'Blindt', startDate: '6/5/2011', department: 'Research and Development', dateOfBirth: '12/9/1999', street: '609 Loeprich Court', city: 'Ikey', zipCode: '665229' },
{ firstName: 'Maëlle', lastName: 'Hosier', startDate: '3/23/2008', department: 'Research and Development', dateOfBirth: '7/15/1956', street: '7 Oakridge Lane', city: 'København', state: 'Region Hovedstaden', zipCode: '1121' },
{ firstName: 'Léone', lastName: 'Kite', startDate: '7/24/2019', department: 'Product Management', dateOfBirth: '12/17/1959', street: '21728 Jenifer Lane', city: 'Ganjur' },
{ firstName: 'Publicité', lastName: 'Twentyman', startDate: '11/16/2017', department: 'Accounting', dateOfBirth: '7/17/1972', street: '89 Bellgrove Trail', city: 'Guadalupe' },
{ firstName: 'Danièle', lastName: 'Roocroft', startDate: '3/23/2011', department: 'Accounting', dateOfBirth: '5/20/1943', street: '5795 Spaight Park', city: 'Cinagrog Girang' },
{ firstName: 'Angélique', lastName: 'Rassell', startDate: '4/30/2008', department: 'Human Resources', dateOfBirth: '2/22/1988', street: '8873 Colorado Court', city: 'Alfonso', zipCode: '4123' },
{ firstName: 'Angèle', lastName: 'Segot', startDate: '5/9/2022', department: 'Legal', dateOfBirth: '5/4/1993', street: '60292 Schmedeman Alley', city: 'Chorente', state: 'Braga', zipCode: '4755-121' },
{ firstName: 'Pélagie', lastName: 'Slane', startDate: '1/5/2023', department: 'Business Development', dateOfBirth: '9/25/1984', street: '7 Logan Point', city: 'Calvaria de Baixo', state: 'Leiria', zipCode: '2440-356' },
{ firstName: 'Mégane', lastName: 'Harcourt', startDate: '8/19/2001', department: 'Marketing', dateOfBirth: '1/29/1963', street: '42713 Summit Pass', city: 'Mataloko' },
{ firstName: 'Félicie', lastName: 'Demogeot', startDate: '1/15/2002', department: 'Research and Development', dateOfBirth: '12/29/1997', street: '0476 Alpine Hill', city: 'Čačak' },
{ firstName: 'Håkan', lastName: 'Aires', startDate: '5/12/2018', department: 'Product Management', dateOfBirth: '3/7/1960', street: '5 Atwood Pass', city: 'Pridonskoy', zipCode: '394091' },
{ firstName: 'Ophélie', lastName: 'Simnett', startDate: '10/19/2016', department: 'Research and Development', dateOfBirth: '10/4/2009', street: '19 8th Pass', city: 'Yanggu' },
{ firstName: 'Desirée', lastName: 'Brace', startDate: '2/10/2003', department: 'Training', dateOfBirth: '7/29/1998', street: '1 Corry Way', city: 'Hữu Lũng' },
{ firstName: 'Lyséa', lastName: 'Canelas', startDate: '8/25/2012', department: 'Services', dateOfBirth: '8/15/2002', street: '747 Dayton Road', city: 'Cadiz', state: 'Andalucia', zipCode: '11005' },
{ firstName: 'Mélina', lastName: 'Lamlin', startDate: '12/20/2023', department: 'Research and Development', dateOfBirth: '8/4/1965', street: '2 Vahlen Parkway', city: 'Nijiangping' },
{ firstName: 'Bérengère', lastName: 'Humbatch', startDate: '8/26/2020', department: 'Marketing', dateOfBirth: '3/8/2000', street: '51 Boyd Plaza', city: 'Žalec', zipCode: '3310' },
{ firstName: 'Geneviève', lastName: 'Greenman', startDate: '2/24/2014', department: 'Product Management', dateOfBirth: '9/15/2012', street: '78736 Buena Vista Place', city: 'Fenjie' },
{ firstName: 'Yè', lastName: 'Martinelli', startDate: '1/23/2021', department: 'Marketing', dateOfBirth: '11/21/1990', street: '52 Armistice Court', city: 'São Martinho do Campo', state: 'Porto', zipCode: '4795-446' },
{ firstName: 'Maëlann', lastName: 'Iddenden', startDate: '1/31/2007', department: 'Human Resources', dateOfBirth: '5/13/1963', street: '85263 Commercial Plaza', city: 'Jiujie' },
{ firstName: 'Crééz', lastName: 'Findlay', startDate: '7/10/2012', department: 'Human Resources', dateOfBirth: '6/5/1985', street: '1 Melby Road', city: 'Lukhovka', zipCode: '450075' },
{ firstName: 'Mén', lastName: 'Derx', startDate: '10/5/2005', department: 'Training', dateOfBirth: '9/7/2002', street: '62 2nd Place', city: 'Daoqiao' },
{ firstName: 'André', lastName: 'Waslin', startDate: '8/3/2022', department: 'Engineering', dateOfBirth: '6/9/2010', street: '0709 Cordelia Circle', city: 'Old Harbour Bay' },
{ firstName: 'Måns', lastName: 'Saphir', startDate: '6/2/2014', department: 'Sales', dateOfBirth: '10/6/1999', street: '36898 Continental Point', city: 'Piasek', zipCode: '43-211' },
{ firstName: 'Lèi', lastName: 'Guillem', startDate: '1/24/2013', department: 'Business Development', dateOfBirth: '10/13/1994', street: '125 Claremont Circle', city: 'Chittagong', zipCode: '4000' },
{ firstName: 'Cloé', lastName: 'Gamble', startDate: '11/25/2009', department: 'Engineering', dateOfBirth: '8/5/1985', street: '9053 Evergreen Way', city: 'Savitaipale', zipCode: '54801' },
{ firstName: 'Yú', lastName: 'Torrent', startDate: '5/17/2014', department: 'Human Resources', dateOfBirth: '12/13/1958', street: '39 Acker Plaza', city: 'San Benito', zipCode: '8423' },
{ firstName: 'Hélèna', lastName: 'Rosellini', startDate: '12/19/2011', department: 'Product Management', dateOfBirth: '6/26/1943', street: '7638 Steensland Crossing', city: 'Da’an' },
{ firstName: 'Östen', lastName: 'Shalloe', startDate: '6/16/2009', department: 'Marketing', dateOfBirth: '2/17/1981', street: '4053 Sutherland Drive', city: 'Qŭrghonteppa' },
{ firstName: 'Börje', lastName: 'Semeniuk', startDate: '5/29/2015', department: 'Marketing', dateOfBirth: '5/7/1945', street: '7 Waywood Way', city: 'Altamira', zipCode: '68370-000' },
{ firstName: 'Maëline', lastName: 'Hlavecek', startDate: '5/12/2007', department: 'Engineering', dateOfBirth: '8/3/2000', street: '2232 Hansons Center', city: 'Šuto Orizare', zipCode: '1040' },
{ firstName: 'Maëlla', lastName: 'Praton', startDate: '2/14/2008', department: 'Sales', dateOfBirth: '5/12/1994', street: '8 Center Junction', city: 'Umpak' },
{ firstName: 'Amélie', lastName: 'Trineman', startDate: '5/20/2007', department: 'Research and Development', dateOfBirth: '7/27/1943', street: '9 Artisan Place', city: 'Dajing' },
{ firstName: 'Dorothée', lastName: 'Stirgess', startDate: '10/10/2004', department: 'Product Management', dateOfBirth: '4/23/1966', street: '5369 Hansons Hill', city: 'Września', zipCode: '62-314' },
{ firstName: 'Aí', lastName: 'Matuszkiewicz', startDate: '6/4/2023', department: 'Human Resources', dateOfBirth: '2/2/2010', street: '954 Shopko Point', city: 'Sydney Mines', state: 'Nova Scotia', zipCode: 'B1V' },
{ firstName: 'Maïlys', lastName: 'Sinnocke', startDate: '4/20/2017', department: 'Engineering', dateOfBirth: '5/31/2014', street: '353 Gateway Court', city: 'Sinisian', zipCode: '4212' },
{ firstName: 'Françoise', lastName: 'Di Matteo', startDate: '3/23/2002', department: 'Business Development', dateOfBirth: '12/26/1959', street: '6643 Corscot Road', city: 'Habingkloang' },
{ firstName: 'Bérangère', lastName: 'Philippsohn', startDate: '9/25/2018', department: 'Engineering', dateOfBirth: '11/5/1941', street: '25 Sloan Lane', city: 'Xiguantun Muguzu Manzuxiang' },
{ firstName: 'Méthode', lastName: 'Pepis', startDate: '10/9/2006', department: 'Legal', dateOfBirth: '5/20/1980', street: '8 Larry Parkway', city: 'Severnyy', zipCode: '346763' },
{ firstName: 'Mà', lastName: 'Topliss', startDate: '8/6/2023', department: 'Accounting', dateOfBirth: '5/29/1979', street: '50 Crescent Oaks Road', city: 'Altanbulag' },
{ firstName: 'Mélodie', lastName: 'Bunkle', startDate: '6/27/2000', department: 'Business Development', dateOfBirth: '4/1/1946', street: '42 John Wall Terrace', city: 'Beiyuan' },
{ firstName: 'Ophélie', lastName: 'Simonou', startDate: '3/20/2018', department: 'Business Development', dateOfBirth: '6/14/1948', street: '78 Anthes Terrace', city: 'Zelenogorsk', zipCode: '663694' },
{ firstName: 'Méng', lastName: 'Woodings', startDate: '10/14/2012', department: 'Sales', dateOfBirth: '2/11/1997', street: '2507 Prairie Rose Lane', city: 'Brezovica', zipCode: '33411' },
{ firstName: 'Régine', lastName: 'OScandall', startDate: '11 / 24 / 2004', department: 'Legal', dateOfBirth: '7 / 29 / 2010', street: '5 Packers Point', city: 'Iaçu', zipCode: '46860-000'},
{ firstName: 'Adélie', lastName: 'Pembery', startDate: '2/5/2002', department: 'Sales', dateOfBirth: '6/18/1940', street: '91816 Orin Court', city: 'Buerarema', zipCode: '45615-000' },
{ firstName: 'Méghane', lastName: 'Chopy', startDate: '6/8/2005', department: 'Services', dateOfBirth: '11/5/1961', street: '854 Sage Way', city: 'Kaparéllion' },
{ firstName: 'Nadège', lastName: 'Ailmer', startDate: '10/7/2023', department: 'Support', dateOfBirth: '2/15/2002', street: '09 Del Mar Place', city: 'Krajan' },
{ firstName: 'Audréanne', lastName: 'Mowen', startDate: '9/13/2002', department: 'Services', dateOfBirth: '3/21/1994', street: '1213 Warbler Drive', city: 'Luoping' },
{ firstName: 'Zoé', lastName: 'Dingley', startDate: '9/21/2000', department: 'Services', dateOfBirth: '9/30/1959', street: '5298 International Terrace', city: 'Gbadolite' },
{ firstName: 'Gösta', lastName: 'Goghin', startDate: '7/18/2001', department: 'Services', dateOfBirth: '4/27/1991', street: '8537 Sycamore Hill', city: 'Vrýses' },
{ firstName: 'Régine', lastName: 'Blindt', startDate: '6/5/2011', department: 'Research and Development', dateOfBirth: '12/9/1999', street: '609 Loeprich Court', city: 'Ikey', zipCode: '665229' },
{ firstName: 'Maëlle', lastName: 'Hosier', startDate: '3/23/2008', department: 'Research and Development', dateOfBirth: '7/15/1956', street: '7 Oakridge Lane', city: 'København', state: 'Region Hovedstaden', zipCode: '1121' },
{ firstName: 'Léone', lastName: 'Kite', startDate: '7/24/2019', department: 'Product Management', dateOfBirth: '12/17/1959', street: '21728 Jenifer Lane', city: 'Ganjur' },
{ firstName: 'Publicité', lastName: 'Twentyman', startDate: '11/16/2017', department: 'Accounting', dateOfBirth: '7/17/1972', street: '89 Bellgrove Trail', city: 'Guadalupe' },
{ firstName: 'Danièle', lastName: 'Roocroft', startDate: '3/23/2011', department: 'Accounting', dateOfBirth: '5/20/1943', street: '5795 Spaight Park', city: 'Cinagrog Girang' },
{ firstName: 'Angélique', lastName: 'Rassell', startDate: '4/30/2008', department: 'Human Resources', dateOfBirth: '2/22/1988', street: '8873 Colorado Court', city: 'Alfonso', zipCode: '4123' },
{ firstName: 'Angèle', lastName: 'Segot', startDate: '5/9/2022', department: 'Legal', dateOfBirth: '5/4/1993', street: '60292 Schmedeman Alley', city: 'Chorente', state: 'Braga', zipCode: '4755-121' },
{ firstName: 'Pélagie', lastName: 'Slane', startDate: '1/5/2023', department: 'Business Development', dateOfBirth: '9/25/1984', street: '7 Logan Point', city: 'Calvaria de Baixo', state: 'Leiria', zipCode: '2440-356' },
{ firstName: 'Mégane', lastName: 'Harcourt', startDate: '8/19/2001', department: 'Marketing', dateOfBirth: '1/29/1963', street: '42713 Summit Pass', city: 'Mataloko' },
{ firstName: 'Félicie', lastName: 'Demogeot', startDate: '1/15/2002', department: 'Research and Development', dateOfBirth: '12/29/1997', street: '0476 Alpine Hill', city: 'Čačak' },
{ firstName: 'Håkan', lastName: 'Aires', startDate: '5/12/2018', department: 'Product Management', dateOfBirth: '3/7/1960', street: '5 Atwood Pass', city: 'Pridonskoy', zipCode: '394091' },
{ firstName: 'Ophélie', lastName: 'Simnett', startDate: '10/19/2016', department: 'Research and Development', dateOfBirth: '10/4/2009', street: '19 8th Pass', city: 'Yanggu' },
{ firstName: 'Desirée', lastName: 'Brace', startDate: '2/10/2003', department: 'Training', dateOfBirth: '7/29/1998', street: '1 Corry Way', city: 'Hữu Lũng' },
{ firstName: 'Lyséa', lastName: 'Canelas', startDate: '8/25/2012', department: 'Services', dateOfBirth: '8/15/2002', street: '747 Dayton Road', city: 'Cadiz', state: 'Andalucia', zipCode: '11005' },
{ firstName: 'Mélina', lastName: 'Lamlin', startDate: '12/20/2023', department: 'Research and Development', dateOfBirth: '8/4/1965', street: '2 Vahlen Parkway', city: 'Nijiangping' }
];
