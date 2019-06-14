import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_FIRMWARE', {schema: 'dbo' } )
export class T_SPY_FIRMWARE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'SPF_SPYID_N',
        })
    public SPF_SPYID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'SPF_REQUEST_DAT',
        })
    public SPF_REQUEST_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SPF_USERID_C',
        })
    public SPF_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPF_COMPUTER_C',
        })
    public SPF_COMPUTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPF_PDT_C',
        })
    public SPF_PDT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPF_MODEL_C',
        })
    public SPF_MODEL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPF_MODELDESCRIPTION_C',
        })
    public SPF_MODELDESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'SPF_FWCURRENT_C',
        })
    public SPF_FWCURRENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'SPF_FWNEXT_C',
        })
    public SPF_FWNEXT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'SPF_FWFINAL_C',
        })
    public SPF_FWFINAL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPF_STATUS_C',
        })
    public SPF_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPF_STATUS_DAT',
        })
    public SPF_STATUS_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPF_REASON_C',
        })
    public SPF_REASON_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SPF_COMMENT_C',
        })
    public SPF_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SPF_PREUPDATECOMMAND_C',
        })
    public SPF_PREUPDATECOMMAND_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SPF_UPDATECOMMAND_C',
        })
    public SPF_UPDATECOMMAND_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SPF_FIRMWAREFILE_C',
        })
    public SPF_FIRMWAREFILE_C: string | null;

}
