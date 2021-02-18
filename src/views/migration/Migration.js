import React, { useState,useContext } from 'react';
import { Collapse, Button, Radio } from 'antd';
import { UserContext } from 'contexts/User';
import { truncateAddr } from 'utils/helpers';
import { Web3SignIn } from 'components/shared/Web3SignIn';

const { Panel } = Collapse;

const Migration = () => {
  const [userOption,setUserOption] = useState("");
  const [migrationDone,toggleMigrationDone] = useState(false);
  const [currentUser] = useContext(UserContext);
  const onChange = (e) => {
    setUserOption(e.target.value);
  }
  return (
    <div className="Migration">
      <div className="Intro">
        <div className="View">
          <h1>On this page, we’ll assist you in migrating your Tributes (TRB) to the new version of the contract.</h1>
          <Collapse>
              <Panel header="Why do I need to migrate my TRB?" key="1">
                <p>Explanation of what happend here</p>
            </Panel>
          </Collapse>

          <Collapse>
              <Panel header="What are the steps I need to take?" key="2">
              <ul>
                <li>In Metamask, choose the account containing the TRB you want to migrate.</li>
                <li>Click the "Connect"-button in step 1.</li>
                <li>If you are connected, your pubkey will appear in step 1. Also, in step 2 your balance will now be visible under "Current Balance", and the "Migrate TRB"-button will now be enabled.</li>
                <li>Click the "Migrate TRB"-button in step 2.</li>
                <li>Upon clicking the "Migrate TRB"-button, the MetaMask modal will ask you to confirm this transaction. Make sure you have ETH to pay the gas of this transaction!</li>
                <li>After confirming the transaction in MetaMask, you can follow its process on Etherscan. When this transaction has reached sufficient confirmations, your new balance will be visible under "New balance".</li>
                <li>Your tokens are now successfully migrated to the new contract!</li>
              </ul>
            </Panel>
          </Collapse>

        </div>
      </div>

      {/* 

      !!!
      OPTIONS SELECTOR:
      !!!

      <div className="View">
        <p>Select the option that applies to you:</p>
        <Radio.Group
            className={userOption ? "RadioGroup wselected" : "RadioGroup"}
            onChange={(e) => onChange(e)}>
              <Radio
                className="RadioItem"
                value="option1"
                key="1">
                  My TRB is on a wallet I have full access to.
              </Radio>
              <Radio
                className="RadioItem"
                value="option2"
                key="2">
                  My TRB is on a third party wallet (e.g. pool, ...).
              </Radio>
          </Radio.Group>
      </div> */}

      <div className="View Step">
        <h2><span className="nr">1.</span> Connect with the Metamask</h2>
        {!currentUser ? null : (
            <p className="connected">Connected as: <span>{currentUser.address}</span></p>
          )}
          <Web3SignIn />
      </div>
      <div className="Line"></div>
      <div className="View Step">
        <h2><span className="nr">2.</span> Migrate your TRB</h2>
        <div className="Balances">
          <div className="Balance">
            <p className={migrationDone ? "halfop" : "fullop"}>Current balance:</p>
            <h1 className={migrationDone ? "halfop" : "fullop"}>800 TRB</h1>
          </div>
          <div className="Balance">
            <p></p>
            <h1 className={migrationDone ? "halfop" : "fullop"}>&#62;</h1>
          </div>
          <div className="Balance">
            <p>New balance:</p>
            <h1 onClick={() =>toggleMigrationDone(!migrationDone)}>0 TRB</h1>
          </div>
        </div>
        {migrationDone ?
        null
        :
        <Button size="large" type="default">
          Migrate TRB
        </Button>
        }
      </div>
      {migrationDone ?
      <div className="Success">
        <div className="View">
          <h1>You successfully migrated your TRB!</h1>
        </div>
      </div>
      :
      null }
    </div>
  );
};

export default Migration;
