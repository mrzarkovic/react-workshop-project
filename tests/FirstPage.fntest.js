import {Selector} from 'testcafe';

// Test other browser versions: google saucelabs

fixture('First page').page('http://localhost:8080');

test('First page test', async t => {
    
    const beforeCount = await Selector('.home div').count;

    await t.expect(beforeCount).eql(6);
    
    await t.click('#button');

    const afterCount = await Selector('.home div').count;

    await t.expect(afterCount).eql(7);
});