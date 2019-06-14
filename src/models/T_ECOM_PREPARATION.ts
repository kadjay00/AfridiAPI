import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_PREPARATION', {schema: 'dbo' } )
export class T_ECOM_PREPARATION {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'EPR_PREPARATIONID_C',
        })
    public EPR_PREPARATIONID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'EPR_USERID_PREP_C',
        })
    public EPR_USERID_PREP_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EPR_STARTPREP_DAT',
        })
    public EPR_STARTPREP_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EPR_ENDPREP_DAT',
        })
    public EPR_ENDPREP_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'EPR_STATUS_C',
        })
    public EPR_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EPR_STATUSDATE_DAT',
        })
    public EPR_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'EPR_USERID_VALID_C',
        })
    public EPR_USERID_VALID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EPR_CREATIONDATE_DAT',
        })
    public EPR_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EPR_PICKINGDATE_DAT',
        })
    public EPR_PICKINGDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'EPR_LOCKEDUSER_C',
        })
    public EPR_LOCKEDUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EPR_LOCKEDDATE_DAT',
        })
    public EPR_LOCKEDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'EPR_LOCKEDUTIL_C',
        })
    public EPR_LOCKEDUTIL_C: string | null;

}
