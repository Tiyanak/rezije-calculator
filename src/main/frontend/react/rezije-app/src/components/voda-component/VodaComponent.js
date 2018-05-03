import React, { Component } from 'react';
import './VodaComponent.css';
import TextField from 'material-ui/TextField';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


class VodaComponent extends Component {

    render() {
        return (
            <div className="VodaComponent">

                <div className="tableWrapper">

                    <Table  className="myTable table-borderless">
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Opis</TableHeaderColumn>
                                <TableHeaderColumn>UTableRowosak</TableHeaderColumn>
                                <TableHeaderColumn>Cijena</TableHeaderColumn>
                                <TableHeaderColumn>Iznos bez pdva</TableHeaderColumn>
                                <TableHeaderColumn>pdv</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>Osnovna cijena vodne usluge javne vodoopskrbe</TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="UTableRowosak"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Cijena"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Iznos bez pdva"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="pdv"></TextField></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Fiskni dio osnovne cijene vodnih usluga</TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="UTableRowosak"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Cijena"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Iznos bez pdva"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="pdv"></TextField></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Naknada za razvoj vodoopskrbnih grad.</TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="UTableRowosak"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Cijena"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Iznos bez pdva"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="pdv"></TextField></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Naknada za koristenje voda</TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="UTableRowosak"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Cijena"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Iznos bez pdva"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="pdv"></TextField></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Naknada za zastitu voda</TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="UTableRowosak"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Cijena"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Iznos bez pdva"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="pdv"></TextField></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Osnovna cijena vodne usluge odvodnje</TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="UTableRowosak"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Cijena"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Iznos bez pdva"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="pdv"></TextField></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Fiskni mjesecni iznos za odvodnju</TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="UTableRowosak"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Cijena"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="Iznos bez pdva"></TextField></TableRowColumn>
                                <TableRowColumn><TextField type="number" hintText="pdv"></TextField></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>

            </div>
        );
    }
}

export default VodaComponent;
