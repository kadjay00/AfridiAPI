import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROSPECTSNEW', {schema: 'dbo' } )
export class T_PROSPECTSNEW {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_YEAR_N',
        })
    public PRO_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_WEEK_N',
        })
    public PRO_WEEK_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_SUBDEPARTMENT_N',
        })
    public PRO_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_LOSSPERC_D',
        })
    public PRO_LOSSPERC_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PRO_USERID_C',
        })
    public PRO_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_DATE_DAT',
        })
    public PRO_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PRO_USERIDCHANGE_C',
        })
    public PRO_USERIDCHANGE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_DATECHANGE_DAT',
        })
    public PRO_DATECHANGE_DAT: Date | null;

}
