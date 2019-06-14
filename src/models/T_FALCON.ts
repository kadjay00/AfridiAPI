import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FALCON', {schema: 'dbo' } )
export class T_FALCON {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'FAL_SERIALNUMBER_C',
        })
    public FAL_SERIALNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FAL_MODEL_C',
        })
    public FAL_MODEL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'FAL_FIRMWARE_C',
        })
    public FAL_FIRMWARE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAL_FIRSTSEEN_DAT',
        })
    public FAL_FIRSTSEEN_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAL_LASTCONNECTION_DAT',
        })
    public FAL_LASTCONNECTION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'FAL_COMMUNICATION_C',
        })
    public FAL_COMMUNICATION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAL_FIRSTSEENRF_DAT',
        })
    public FAL_FIRSTSEENRF_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAL_LASTCONNECTIONRF_DAT',
        })
    public FAL_LASTCONNECTIONRF_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FAL_OSVERSION_C',
        })
    public FAL_OSVERSION_C: string | null;

}
