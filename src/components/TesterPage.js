import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { INFO } from "../shared/info";

console.log(INFO);

const info = INFO;

const TesterPage = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container">
            <div className="row">
                {info.map(infos =>
                    <div key={infos.id} className="col-3 pt-4">
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                        <Collapse isOpen={isOpen}>
                            <Card>
                                {infos.title}
                                <CardBody>
                                    {infos.description}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TesterPage;