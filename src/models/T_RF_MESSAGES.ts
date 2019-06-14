import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RF_MESSAGES', {schema: 'dbo' } )
export class T_RF_MESSAGES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 30,
        name: 'RFM_ID_C',
        })
    public RFM_ID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 200,
        name: 'RFM_NL_C',
        })
    public RFM_NL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 200,
        name: 'RFM_FR_C',
        })
    public RFM_FR_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'RFM_SECONDS_N',
        })
    public RFM_SECONDS_N: number;

}
